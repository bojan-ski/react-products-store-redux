// firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import { auth, db } from "../firebase.config"
// utils
import getCurrentTimeAndDate from "../utils/getCurrentTimeAndDate"


const userCreateAccount = async (username, email, password) => {
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        const newUser = userCredentials.user

        updateProfile(auth.currentUser, {
            displayName: username
        })

        const userCredentialsCopy = {
            username, 
            email,
            storeCredit: 100, // store credit - default
            timestamp: serverTimestamp(),
            accountCreated: getCurrentTimeAndDate()
        }

        await setDoc(doc(db, 'users', newUser.uid), userCredentialsCopy)

        return true
    } catch (error) {
        return false
    }
}

export default userCreateAccount