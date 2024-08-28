console.log('%c setup.js', 'color: blue;');

var firebase;

/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase consol. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
function fb_initialise() {
    console.log('fb_initialise()');
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB2XiJfh-wtiA1HI7xJ7g_ZZlfikJ5mFyk",
    authDomain: "dtech-careers.firebaseapp.com",
    databaseURL: "https://dtech-careers-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "dtech-careers",
    storageBucket: "dtech-careers.appspot.com",
    messagingSenderId: "231302756773",
    appId: "1:231302756773:web:68bb1e9c49a88463b1504c",
    measurementId: "G-S2ZTMDWBEN"
  };

  // Initialize Firebase
  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }
}