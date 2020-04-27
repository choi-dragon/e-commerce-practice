import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: "AIzaSyDWxjWuVYdy7wHy-9SZHodk1rdYZy55454",
	authDomain: "e-commerce-db-b3dfe.firebaseapp.com",
	databaseURL: "https://e-commerce-db-b3dfe.firebaseio.com",
	projectId: "e-commerce-db-b3dfe",
	storageBucket: "e-commerce-db-b3dfe.appspot.com",
	messagingSenderId: "675632182823",
	appId: "1:675632182823:web:2be7879149cd5fecc4c002",
	measurementId: "G-8YQYDW64TG",
};

firebase.initializeApp(config)
export const auth=firebase.auth()
export const firestore=firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider() // this enables google sign in

provider.setCustomParameters({prompt:'select_account'})// google sign in always pops up

export const signInWithGoogle=()=>auth.signInWithPopup(provider) // this function allows one to use the google sign in popup. This is used as onClick() in button. So whenever you trigger the function with will pop up google sign in screen. Very EASY

export default firebase