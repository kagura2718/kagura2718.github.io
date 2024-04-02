// https://firebase.google.com/docs/cloud-messaging/js/receive?hl=ja

// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.

// ref: https://github.com/firebase/firebase-js-sdk/issues/5732#issuecomment-969453902
importScripts('https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.10.0/firebase-messaging-compat.js');

const firebaseConfig = {
  projectId: "kagura2718githubpages",
  apiKey: "AIzaSyBgUewk_biDoZTc2N22Cci1wPamgiaYTzw",
  authDomain: "kagura2718githubpages.firebaseapp.com",
  messagingSenderId: "955116005284",
  appId: "1:955116005284:web:99f5297fc9562faa640331",
};

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {

  console.log(`Service Worker BackgroundHandler appId: ${firebaseConfig.appId}.`);

  const title = payload.notification.title;
  const opts = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  return self.registration.showNotification(title, opts);
});

self.addEventListener('install', event => {
  console.log(`Service Worker install. appId: ${firebaseConfig.appId}.`);
});

self.addEventListener('activate', event => {
  console.log(`Service Worker activate. appId: ${firebaseConfig.appId}.`);
});
