// firebase/firestore funcs
import { addDoc, doc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
// toastify
import { toast } from "react-toastify";


const saveUserShippingDetailsToFirebase = async (userID, userShippingDetailsFormData) => {
    try {
        const userShippingDetails = {
            ...userShippingDetailsFormData,
            timestamp: serverTimestamp()
        }

        const userDocRef = doc(db, `users/${userID}`);

        // Reference to the bookmarkedProducts subcollection
        const userShippingDetailsRef = collection(userDocRef, 'shippingDetails');

        // Add a new document to the bookmarkedProducts subcollection
        await addDoc(userShippingDetailsRef, userShippingDetails);

        // success message
        toast.success('Shipping details saved')
    } catch (error) {
        // error message
        toast.error('There was an error while saving Your shipping details')
    }
}

export default saveUserShippingDetailsToFirebase