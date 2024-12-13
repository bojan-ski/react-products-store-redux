// firebase
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase.config'


const userResetPassword = async () => {
    try {
        await sendPasswordResetEmail(auth, enteredEmail)

        return true
    } catch (error) {
        return false
    }
}

export default userResetPassword