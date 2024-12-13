// firebase
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'


const userLogin = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)

        return true
    } catch (error) {
        return false
    }
}

export default userLogin