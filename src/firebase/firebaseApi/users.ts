import { collection, doc, getDoc } from "firebase/firestore";
import { Firestore } from "../firebase";
import { UserDetails } from "../../models/User";

const usersCollection = collection(Firestore, "userDetails");

const getUser = async (uid: string): Promise<UserDetails> => {
	const userDocRef = doc(usersCollection, uid);
	const user = await getDoc(userDocRef);

	if (!user.exists()) throw new Error("User not found");
	return user.data() as UserDetails;
};

const usersFirebaseApi = {
	getUser,
};

export default usersFirebaseApi;
