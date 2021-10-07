import firebase from "firebase";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyCaeDwSPJnIQ0lgD2HOvZbklZDgndYpBQ8", //api jey for firestore
	authDomain: "geodump-27582.firebaseapp.com",
	projectId: "geodump-27582", // project name
	storageBucket: "geodump-27582.appspot.com", // buckey id
	messagingSenderId: "751887791497",
	appId: "1:751887791497:web:7e8c46a8dee5235eec5d58",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
