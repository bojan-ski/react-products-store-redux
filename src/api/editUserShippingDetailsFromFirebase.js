// firebase/firestore funcs
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase.config";
// toastify
import { toast } from "react-toastify";


const editUserShippingDetailsFromFirebase = async (userID, docID, updatedUserShippingDetailsData) => {
  try {
    const userShippingDetailsRef = doc(db, `users/${userID}/shippingDetails/${docID}`);

    // Update the document
    await updateDoc(userShippingDetailsRef, updatedUserShippingDetailsData);

    // success message
    toast.success('Shipping details updated!')
  } catch (error) {
    // error message
    toast.error('There was an error while updating Your shipping details')
  }
}

export default editUserShippingDetailsFromFirebase