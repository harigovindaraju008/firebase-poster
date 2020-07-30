import React, { useState, useEffect } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default function Auth() {
  const firebaseConfig = {
    apiKey: "AIzaSyAuH4DfRbUzsesD65aej_jbjyfXsTG64WE",
    authDomain: "dashborad-a209f.firebaseapp.com",
    databaseURL: "https://dashborad-a209f.firebaseio.com",
    projectId: "dashborad-a209f",
    storageBucket: "dashborad-a209f.appspot.com",
    messagingSenderId: "817513298765",
    appId: "1:817513298765:web:9bdef9302bd7688cab1504",
  };
  const [active, setActive] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState(0);
  const [pwd, setpwd] = useState("");

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);

  function register() {
    // firebase.initializeApp(firebaseConfig);
    firebase.database().ref("posters/").set({
      username: name,
      email: email,
      phone: phone,
      password: pwd,
    });
    firebase.database().ref("");
  }

  return (
    <div>
      <div className="card">
        <div className="field">
          <span className="header">Login</span>
          <div className="form-group">
            <input type="EMAIL" required={true} />
            <label htmlFor="input" className="control-label">
              EMAIL
            </label>
            <i className="bar"></i>
          </div>
          <div className="form-group">
            <input type="password" required={true} />
            <label htmlFor="input" className="control-label">
              Password
            </label>
            <i className="bar"></i>
          </div>
          <div className="button-container">
            <button type="button" className="button">
              <span>Submit</span>
            </button>
          </div>
        </div>
        <div className={active ? "fab active" : "fab"}>
          <i
            className={active ? "zmdi zmdi-close" : "zmdi zmdi-account-add "}
            onClick={() => setActive(!active)}
          ></i>
          <div className="field">
            <span className="header">Register</span>
            <div className="form-group">
              <input
                type="text"
                required={true}
                onChange={({ target }) => setname(target.value)}
              />
              <label htmlFor="input" className="control-label">
                NAME
              </label>
              <i className="bar"></i>
            </div>
            <div className="form-group">
              <input
                type="email"
                required={true}
                onChange={({ target }) => setemail(target.value)}
              />
              <label htmlFor="input" className="control-label">
                EMAIL
              </label>
              <i className="bar"></i>
            </div>
            <div className="form-group">
              <input
                type="tel"
                required={true}
                onChange={({ target }) => setphone(target.value)}
              />
              <label htmlFor="input" className="control-label">
                PHONE NO
              </label>
              <i className="bar"></i>
            </div>
            <div className="form-group">
              <input
                type="password"
                required={true}
                onChange={({ target }) => setpwd(target.value)}
              />
              <label htmlFor="input" className="control-label">
                Password
              </label>
              <i className="bar"></i>
            </div>
            <div className="button-container">
              <button
                type="button"
                onClick={() => register()}
                className="button"
              >
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <style jsx>{``}</style>*/}
      <style jsx global>{`
        @import url(https://zavoloklom.github.io/material-design-iconic-font/css/docs.md-iconic-font.min.css);
        body {
          background: #ffd54f;
          text-align: center;
        }

        .card {
          height: 400px;
          width: 300px;
          background: #fff;
          font-family: Roboto;
          display: block;
          position: relative;
          margin: 50px auto;
          border-radius: 5px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
          transition: all 0.2s ease-in-out;
        }

        .card:hover {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
            0 6px 6px rgba(0, 0, 0, 0.23);
        }

        .fab {
          display: block;
          position: absolute;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #ff9800;
          cursor: pointer;
          top: -28px;
          right: -28px;
          z-index: 1000;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
          transition: all 0.4s ease-in-out;
        }

        .fab > i {
          color: #fff;
          line-height: 56px;
          font-size: 2em;
          transition: all 0.4s ease-in-out;
          margin-right: 20px;
          float: right;
        }

        .active {
          top: 0;
          right: 0;
          border-radius: 5px;
          width: 100%;
          height: 100%;
          cursor: auto;
        }

        .active > i {
          margin: 0 15px;
          transform: rotate(360deg);
          cursor: pointer;
        }

        .fab > .field {
          visibility: hidden;
          opacity: 0;
          width: 0;
          height: 0;
        }

        .active > .field {
          visibility: visible;
          opacity: 1;
          width: 80%;
          height: 100%;
          transition-delay: 0.2s;
        }

        .header {
          display: block;
          position: relative;
          font-size: 2em;
          color: #ff9800;
        }

        .fab .header {
          color: #fff;
        }

        .field {
          display: block;
          width: 80%;
          margin: 25px auto;
          top: 50px;
          height: 300px;
          position: relative;
        }

        .form-group {
          position: relative;
          margin: 25px auto;
          text-align: left;
        }

        .form-group input {
          height: 25px;
        }

        .form-group .control-label {
          position: absolute;
          top: 0.25rem;
          float: left;
          pointer-events: none;
          z-index: 1;
          color: #9e9e9e;
          font-size: 1rem;
          font-weight: normal;
          -webkit-transition: all 0.28s ease;
          transition: all 0.28s ease;
        }

        .fab .control-label {
          color: #fff;
        }

        .form-group .bar {
          position: relative;
          border-bottom: 0.0625rem solid #9e9e9e;
          display: block;
        }

        .fab .form-group .bar {
          border-bottom: 0.0625rem solid #fff;
        }

        .form-group .bar::before {
          content: "";
          height: 0.125rem;
          width: 0;
          left: 50%;
          bottom: -0.0625rem;
          position: absolute;
          background: #ff9800;
          -webkit-transition: left 0.28s ease, width 0.28s ease;
          transition: left 0.28s ease, width 0.28s ease;
          z-index: 2;
        }

        .fab .form-group .bar::before {
          background: #fff;
        }

        .form-group input {
          display: block;
          background: none;
          padding: 0.125rem 0.125rem 0.0625rem;
          font-size: 1rem;
          border-width: 0;
          border-color: transparent;
          line-height: 1.9;
          width: 100%;
          color: transparent;
          -webkit-transition: all 0.28s ease;
          transition: all 0.28s ease;
          box-shadow: none;
        }

        .form-group input[type="file"] {
          line-height: 1;
        }

        .form-group input[type="file"] ~ .bar {
          display: none;
        }

        .form-group input:focus,
        .form-group input:valid,
        .form-group input.form-file,
        .form-group input.has-value {
          color: #333;
        }

        .form-group input:focus ~ .control-label,
        .form-group input:valid ~ .control-label,
        .form-group input.form-file ~ .control-label,
        .form-group input.has-value ~ .control-label {
          font-size: 0.8rem;
          color: gray;
          top: -1rem;
          left: 0;
        }

        .form-group input:focus {
          outline: none;
        }

        .form-group input:focus ~ .control-label {
          color: #ff9800;
        }

        .fab .form-group input:focus ~ .control-label {
          color: #fff;
        }

        .form-group input:focus ~ .bar::before {
          width: 100%;
          left: 0;
        }

        .button {
          position: relative;
          background: #ff9800;
          border: 1px solid #ff9800;
          font-size: 1.1rem;
          color: #4f93ce;
          margin: 3rem 0;
          padding: 0.75rem 3rem;
          cursor: pointer;
          -webkit-transition: background-color 0.28s ease, color 0.28s ease,
            box-shadow 0.28s ease;
          transition: background-color 0.28s ease, color 0.28s ease,
            box-shadow 0.28s ease;
          overflow: hidden;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        }

        .fab .button {
          background: #fff;
          border: 1px solid #ff9800;
          color: #ff9800;
        }

        .button span {
          color: #fff;
          position: relative;
          z-index: 1;
        }

        .fab .button span {
          color: #ff9800;
        }

        .button::before {
          content: "";
          position: absolute;
          background: #071017;
          border: 50vh solid #1d4567;
          width: 30vh;
          height: 30vh;
          border-radius: 50%;
          display: block;
          top: 50%;
          left: 50%;
          z-index: 0;
          opacity: 1;
          -webkit-transform: translate(-50%, -50%) scale(0);
          transform: translate(-50%, -50%) scale(0);
        }

        .button:hover {
          color: #337ab7;
          box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
            0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);
        }

        .button:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
}
