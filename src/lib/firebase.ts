import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
} as const;

function getFirebaseApp() {
  if (!firebaseConfig.apiKey) {
    throw new Error("Missing Firebase configuration. Did you set your VITE_FIREBASE_* env vars?");
  }

  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}

const app = getFirebaseApp();
const db = getFirestore(app);

let analytics: Analytics | undefined;

void isSupported()
  .then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  })
  .catch(() => {
    analytics = undefined;
  });

export { app, db, analytics };
