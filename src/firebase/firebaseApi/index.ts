import usersFirebaseApi from "./users";

const firebaseApi = {
	...usersFirebaseApi,
};

export type FirebaseApi = typeof firebaseApi;

export default firebaseApi;
