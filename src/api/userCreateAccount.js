// firebase/firestore funcs
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase.config"
// toastify
import { toast } from "react-toastify"

const userCreateAccount = async (username, email, password) => {
    try {
        const auth = getAuth()
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        const newUser = userCredentials.user

        updateProfile(auth.currentUser, {
            displayName: username
        })

        const userCredentialsCopy = {
            username, 
            email,
            storeCredit: 300, // store credit
            timestamp: serverTimestamp()
        }

        await setDoc(doc(db, 'users', newUser.uid), userCredentialsCopy)

        //success message
        toast.success('account created');

        return true
    } catch (error) {
        //error message
        toast.error('There was an error, please try again')
        console.log(error);

        return false
    }
}

export default userCreateAccount