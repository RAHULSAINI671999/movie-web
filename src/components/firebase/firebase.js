
import { initializeApp } from "firebase/app";
import { getFirestore ,collection} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBrr63j5UhPC48ph_iziLumu3qU8bcX0cs",
    authDomain: "rsgames-3fbb1.firebaseapp.com",
    projectId: "rsgames-3fbb1",
    storageBucket: "rsgames-3fbb1.appspot.com",
    messagingSenderId: "868307134034",
    appId: "1:868307134034:web:1311f572afd05a1996a18b"
};


const app = initializeApp(firebaseConfig);

export const db =  getFirestore(app)
export const moviesRef = collection(db , "movies")
export const reviewsRef = collection(db , "reviews")
export const usersRef = collection(db , "users")

export default app