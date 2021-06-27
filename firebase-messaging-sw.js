
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  messagingSenderId: "189802447088"
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function(registration) {
      console.log("Registration successful, scope is:", registration.scope);
      firebase.messaging().useServiceWorker(registration);
      // initMessaging.getToken({serviceWorkerRegistration: swRegistration , vapidKey: 'BE3FEaCm43z9oqEWcRBPvCnu4xf8yEYeNayPY2n8LjrgY0xpbnKUnBS_zs2i3L0XRSxWzwmNl6lSXnwWKXnyRbg', serviceWorkerRegistration : registration })
        // .then((currentToken) => {
        //   if (currentToken) {
        //     console.log('current token for client: ', currentToken);
  
        //     // Track the token -> client mapping, by sending to backend server
        //     // show on the UI that permission is secured
        //   } else {
        //     console.log('No registration token available. Request permission to generate one.');
  
        //     // shows on the UI that permission is required 
        //   }
        // })
        // .catch((err) => {
        //   console.log('An error occurred while retrieving token. ', err);
        //   // catch error while creating client token
        // });  
      })
      .catch(function(err) {
        console.log("Service worker registration failed, error:"  , err );
    }); 
  }

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const initMessaging = firebase.messaging();





     