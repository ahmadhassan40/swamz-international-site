import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
} as const;

const hasFirebaseConfig = Boolean(
  firebaseConfig.apiKey &&
    firebaseConfig.projectId &&
    firebaseConfig.appId &&
    firebaseConfig.authDomain &&
    firebaseConfig.storageBucket,
);

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let analytics: Analytics | undefined;

if (hasFirebaseConfig) {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  db = getFirestore(app);

  void isSupported()
    .then((supported) => {
      if (supported) {
        analytics = getAnalytics(app!);
      }
    })
    .catch(() => {
      analytics = undefined;
    });
} else {
  console.warn("Firebase configuration missing. Data capture features are disabled.");
}

export { app, db, analytics, hasFirebaseConfig };
