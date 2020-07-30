import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAuH4DfRbUzsesD65aej_jbjyfXsTG64WE",
  authDomain: "dashborad-a209f.firebaseapp.com",
  databaseURL: "https://dashborad-a209f.firebaseio.com",
  projectId: "dashborad-a209f",
  storageBucket: "dashborad-a209f.appspot.com",
  messagingSenderId: "817513298765",
  appId: "1:817513298765:web:9bdef9302bd7688cab1504",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const emailid = async (email) => {
  if (!firebase.auth().currentUser) {
    return alert("not registered  or logined");
  }
  await firebase;
  // .firestore()
  // .doc(`user/${firebase.auth().currentUser.uid}`)
  // .set({
  //   emailid: email,
  // });
  await firebase
    .database()
    .ref(`users/${firebase.auth().currentUser.uid}`)
    .push({
      emailid: email,
    });
  return "successfully updated";
};

const uid = () => {
  return firebase.auth().currentUser;
};

const userdata = async (uid) => {
  // const data = firebase.firestore().doc(`user/${uid}`).get();
  const data = await firebase
    .database()
    .ref("users")
    .on("value", (snap) => {
      console.log(snap.val());
      return snap.val();
      // console.log(snap.val());
    });

  // return data;
  // return firebase.auth()
};

const addPosters = async (data) => {
  const datas = await firebase.database().ref(`posters`).push({
    tags: data.tags,
    linkinUrl: data.linkinUrl,
    phonenumber: data.phone,
    city: data.city,
  });
  console.log(datas);

  return "successfully added posters";
};

const getPosters = async () => {
  let posters;
  await firebase
    .database()
    .ref("posters")
    .on("value", (snap) => {
      posters = snap.toJSON();
    });

  console.log(posters);
  return posters;
};
export { firebase, emailid, uid, userdata, addPosters, getPosters };

//  ZwimnHfdgfdoo7o0egV2TQ6xKAz1 ${firebase.auth().currentUser.uid}
