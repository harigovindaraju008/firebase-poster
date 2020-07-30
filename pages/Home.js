import React, { useState, useEffect, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../components/modal";
import PhoneInput from "react-phone-number-input";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import {
  faTimesCircle,
  faCity,
  faPhone,
  faLink,
  faPlus,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";
import {
  emailid,
  uid,
  userdata,
  addPosters,
  getPosters,
  firebase,
} from "../config/firebase";

export default function Home() {
  const [message, setmessage] = useState("");
  const [fetchPosts, setfetchPosts] = useState("");
  const [posterModal, setposterModal] = useState(false);
  const [phoneNO, setphoneNO] = useState("");
  const [poster, setposter] = useState({
    tags: ["#trending", "#upcomiing", "#new", "#super"],
    phone: "+917010116467",
    linkinUrl: "wwww.linkedin.com/hariharan",
    city: "trichy",
  });

  useEffect(() => {
    // console.log(getPosters());
    setfetchPosts(getPosters());
    // if (firebase.auth().currentUser) {
    // userInformation();
    // fetchingposters();
    // }
  }, []);

  async function fetchingposters() {
    await firebase
      .database()
      .ref("posters")
      .on("value", async (snap) => {
        // snap.toJSON();
        setfetchPosts(snap.toJSON());
      });

    // await setfetchPosts(poster);
  }

  const userInformation = async () => {
    // await setfetchPosts(getPosters());
    // const userdata = firebase.auth().currentUser;
    // console.log(userdata);
    // await userdata(localStorage.getItem("uid"));
    // console.log(userinfo);
  };

  const details = (msg) => {
    setmessage(msg);
    setTimeout(() => setmessage(""), 5000);
  };

  async function onsubmitPoster() {
    if (!isPossiblePhoneNumber(phoneNO)) {
      return details("please enter valid phone number");
    }
    // await setposter({ ...poster, phone: phoneNO });
    // addPosters(poster);
    // console.log(poster);
    // await fetchingposters();
  }

  function TagEditor() {
    const [tag, setTag] = useState("");
    return (
      <div className="form-group">
        <input
          type="text"
          required={true}
          onChange={({ target }) => setTag(`#${target.value}`)}
        />
        <div className="addTags">
          <FontAwesomeIcon
            icon={faPlus}
            style={{
              color: "black format",
              margin: "1rem",
            }}
            onClick={() =>
              setposter({ ...poster, tags: [...poster.tags, tag] })
            }
          />
        </div>

        <label htmlFor="input" className="control-label">
          Tags
        </label>
        <i className="bar"></i>
      </div>
    );
  }

  const removeTag = async (data) => {
    const allTag = await poster.tags.filter((tag) => tag !== data);
    setposter({ ...poster, tags: allTag });
    console.log(poster.tags);
  };

  return (
    <div>
      {/* {console.log(fetchPosts)} */}
      <div className="button-container">
        <button
          type="button"
          onClick={() => setposterModal(true)}
          className="button"
        >
          <span>Ad post</span>
        </button>
      </div>
      {posterModal && (
        <Modal closeModal={() => setposterModal(false)}>
          <div className="poster--container">
            <div className="poster--editor">
              <TagEditor />
              <div className="form-group">
                <input
                  type="text"
                  required={true}
                  onChange={({ target }) =>
                    setposter({ ...poster, linkinUrl: target.value })
                  }
                />
                <label htmlFor="input" className="control-label">
                  LinkedIn URL
                </label>
                <i className="bar"></i>
              </div>
              <div className="form-group">
                <PhoneInput
                  value={phoneNO}
                  defaultCountry="IN"
                  placeholder="Enter phone number"
                  onChange={setphoneNO}
                />
                <i className="bar"></i>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  required={true}
                  onChange={({ target }) =>
                    setposter({ ...poster, city: target.value })
                  }
                />

                <label htmlFor="input" className="control-label">
                  City
                </label>
                <i className="bar"></i>
              </div>
              <div className="button-container">
                <button
                  type="button"
                  onClick={() => onsubmitPoster()}
                  id="sign-in-button"
                  className="button"
                >
                  <span>Submit</span>
                </button>
              </div>
              <div style={{ color: "red" }}>{message}</div>
            </div>
            <div className="poster">
              <div className="linkedin format">
                <div>
                  <FontAwesomeIcon
                    icon={faLink}
                    style={{
                      color: "black",
                      margin: "1rem",
                    }}
                  />
                </div>
                <div>{poster.linkinUrl}</div>
              </div>
              <div className="phonenumber  format">
                <div>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{
                      color: "black format",
                      margin: "1rem",
                    }}
                  />
                </div>
                <div>{phoneNO}</div>
              </div>
              <div className="city format">
                <div>
                  <FontAwesomeIcon
                    icon={faCity}
                    style={{
                      color: "black",
                      margin: "1rem",
                    }}
                  />
                </div>
                <div>{poster.city}</div>
              </div>
              <div className="tags">
                {poster.tags.map((data, index) => (
                  <Fragment key={index}>
                    <span>
                      {data}
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        onClick={() => removeTag(data)}
                        style={{
                          color: "black",
                        }}
                      />
                    </span>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
      <div className="home-poster">
        {!fetchPosts
          ? " loading please wait "
          : Object.keys(fetchPosts).map((data, index) => (
              <div key={index}>
                <div className="linkedin format">
                  <div>
                    <FontAwesomeIcon
                      icon={faLink}
                      style={{
                        color: "black",
                        margin: "1rem",
                      }}
                    />
                  </div>
                  {/* {console.log(fetchPosts[data])} */}
                  <div>{fetchPosts[data].linkinUrl}</div>
                </div>

                {/* {console.log(fetchPosts[data].tags)} */}
                <div className="tags">
                  {Object.keys(fetchPosts[data].tags).map((tag, index) => (
                    <Fragment key={index}>
                      <span>{fetchPosts[data].tags[tag]}</span>
                    </Fragment>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
