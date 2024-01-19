import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	//...
};

if (getApps().length === 0) {
	initializeApp(firebaseConfig);
}
const app = getApps()[0];

// Auth  is export like this for testing. If a test file pulls in firebase
// (importing Firestore say) it would try init the Auth module and fail due to no config
export const Auth = () => getAuth(app);
export const Firestore = getFirestore(app);
export const Storage = getStorage(app);
export const App = app;
