// firebase/firestore funcs
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
// toastify
import { toast } from "react-toastify"

const userResetPassword = async () => {
    try {
        const auth = getAuth()
        await sendPasswordResetEmail(auth, enteredEmail)

        // success message
        toast.success('Please check your email to complete the reset password process');

        return true
    } catch (error) {
        // error message
        toast.error('There was an error, please try again')
        console.error(error)

        return false
    }
}

export default userResetPassword