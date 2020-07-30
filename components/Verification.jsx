import React, { useState, useEffect } from "react";
import { firebase } from "../config/firebase";
import router from "next/router";

export default function Verification() {
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [invisble, setinvisble] = useState(false);
  const [otp, setotp] = useState(0);
  const [confirmation, setconfirmation] = useState("");
  const [message, setmessage] = useState("");

  const details = (msg) => {
    setmessage(msg);
    setTimeout(() => setmessage(""), 5000);
  };

  function onPhoneSubmit() {
    try {
      const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "sign-in-button",
        {
          size: "invisible",
        }
      );

      firebase
        .auth()
        .signInWithPhoneNumber(`+91${phone}`, recaptchaVerifier)
        .then((res) => {
          setinvisble(true);
          setconfirmation(res);
          details(`message sented to ${phone} `);
          console.log(res);
        })
        .catch((err) => {
          details("please try again");
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }

  function phoneVerifyOTP() {
    confirmation
      .confirm(otp)
      .then(async (user) => {
        console.log(user);
        details("phone nnumber conformed Loading...");
        // await firebase
        //   .firestore()
        //   .doc(`user/${firebase.auth().currentUser.uid}`)
        //   .set({
        //     phone,
        //   });
        await firebase.database().ref(`users`).push({
          email,
          phone,
        });
        await firebase.auth().currentUser.updateProfile({
          email,
          phone,
        });

        await localStorage.setItem("uid", firebase.auth().currentUser.uid);

        setTimeout(() => router.push("/Home"), 2000);
      })
      .catch((err) => details(err.message));
  }

  return (
    <div className="container">
      <div className={!invisble ? "" : "invisible"}>
        <span>
          <h1>REGISTATION</h1>
        </span>
        <div className="form-group">
          <input
            type="text"
            required={true}
            onChange={({ target }) => setemail(target.value)}
          />
          <label htmlFor="input" className="control-label">
            Emailid
          </label>
          <i className="bar"></i>
        </div>
        <div className="form-group">
          <input
            type="text"
            required={true}
            onChange={({ target }) => setphone(target.value)}
          />
          <label htmlFor="input" className="control-label">
            Phone NO
          </label>
          <i className="bar"></i>
        </div>
        <div id="recaptcha-container"></div>
        <div className="button-container">
          <button
            type="button"
            onClick={() => onPhoneSubmit()}
            id="sign-in-button"
            className="button"
          >
            <span>Submit</span>
          </button>
        </div>
      </div>
      <div className={invisble ? "" : "invisible"}>
        <div className="form-group">
          <input
            type="text"
            required={true}
            onChange={({ target }) => setotp(target.value)}
          />
          <label htmlFor="input" className="control-label">
            OTP SENTED
          </label>
          <i className="bar"></i>
        </div>
        <div className="button-container">
          <button
            type="button"
            onClick={() => phoneVerifyOTP()}
            className="button"
          >
            <span>Submit</span>
          </button>
        </div>
      </div>

      <div>{message}</div>
    </div>
  );
}
