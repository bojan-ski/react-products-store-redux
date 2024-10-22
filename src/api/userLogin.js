// firebase/firestore funcs
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
// toastify
import { toast } from "react-toastify"

const userLogin = async (email, password) => {
    try {
        const auth = getAuth()
        await signInWithEmailAndPassword(auth, email, password)

        //success message
        toast.success('user logged in');

        return true
    } catch (error) {
        //error message
        toast.error('There was an error, please try again')
        console.log(error);

        return false
    }
}

export default userLogin