import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBgyLxAcCvS6zFdwA96KfNCjCrkMQcu1DI",
    authDomain: "w4stores-auth.firebaseapp.com",
    projectId: "w4stores-auth",
    storageBucket: "w4stores-auth.appspot.com",
    messagingSenderId: "427202011168",
    appId: "1:427202011168:web:e4e0771a00f4e262e55c45"
})
export const auth = app.auth()
export default app
