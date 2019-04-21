import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
  
// Initialize Firebase
var config = {
apiKey: "AIzaSyB0XlOPku9zm9jU1MnoHVY_s4Myl-uWpuo",
authDomain: "react-redux-firebase-ninja.firebaseapp.com",
databaseURL: "https://react-redux-firebase-ninja.firebaseio.com",
projectId: "react-redux-firebase-ninja",
storageBucket: "react-redux-firebase-ninja.appspot.com",
messagingSenderId: "427355541164"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })


export default firebase;