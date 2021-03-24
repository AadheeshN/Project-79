import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyAajSkAmAAARcdjoS-9PN-84EnPLpJO-nA",
    authDomain: "barter-system-ad7aa.firebaseapp.com",
    projectId: "barter-system-ad7aa",
    storageBucket: "barter-system-ad7aa.appspot.com",
    messagingSenderId: "225680218531",
    appId: "1:225680218531:web:136cfdc9f79143ab99a216"
  };

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();