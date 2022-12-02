// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD4yzUuOSPVy7iHV_gPno63hras1Ngg2YA",
//   authDomain: "mobile-buy-sell.firebaseapp.com",
//   projectId: "mobile-buy-sell",
//   storageBucket: "mobile-buy-sell.appspot.com",
//   messagingSenderId: "1027064802880",
//   appId: "1:1027064802880:web:0a15f5b64d4b5c18caf9a5",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCxGOlvC-xRYg_7ypkgVlvIreWqpTL3rxc",
//   authDomain: "used-laptop-74020.firebaseapp.com",
//   projectId: "used-laptop-74020",
//   storageBucket: "used-laptop-74020.appspot.com",
//   messagingSenderId: "705392006033",
//   appId: "1:705392006033:web:9490911264f6d28b8a4030"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;



import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,

};


const app = initializeApp(firebaseConfig);

export default app;