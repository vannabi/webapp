import 'firebase/analytics';
import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAgbwjKY0qgsPt1E66cVJTGFjWqBtm5yHA',
  authDomain: 'vannabiin.firebaseapp.com',
  databaseURL: 'https://vannabiin.firebaseio.com',
  projectId: 'vannabiin',
  storageBucket: 'vannabiin.appspot.com',
  messagingSenderId: '563710567056',
  appId: '1:563710567056:web:e69b6cd7512e3863ac6e15',
  measurementId: 'G-3BEMKK3E2K',
};

export const initFirebase = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics().setAnalyticsCollectionEnabled(true);
};

export const sendEvent = (
  eventName: string,
  eventParams?: { [key: string]: any },
  options?: firebase.analytics.AnalyticsCallOptions,
) => firebase.analytics().logEvent(eventName, eventParams, options);
