import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
//import { ReCaptchaV3Provider, initializeAppCheck } from 'firebase/app-check';

const firebaseConfig = {
  apiKey: 'AIzaSyDd7dkLNZS-4r2jtXWQfWzTNIRAJvOmnmA',
  authDomain: 'inclusao-social-ec3b0.firebaseapp.com',
  projectId: 'inclusao-social-ec3b0',
  storageBucket: 'inclusao-social-ec3b0.firebasestorage.app',
  messagingSenderId: '699586735512',
  appId: '1:699586735512:web:89f266fdf35afc3df70fed',
  measurementId: 'G-3SLRHWZSL7'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
/*const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('AIzaSyDd7dkLNZS-4r2jtXWQfWzTNIRAJvOmnmA'),
  isTokenAutoRefreshEnabled: true
});*/

export { app, analytics, auth };
