// firebase/firestore funcs
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase.config";

const editUserShippingDetailsFromFirebase = async (userID, docID, updatedUserShippingDetailsData) => {
    try {
        const userShippingDetailsRef = doc(db, `users/${userID}/shippingDetails/${docID}`);
        
        // Update the document
        await updateDoc(userShippingDetailsRef, updatedUserShippingDetailsData);
        
        alert('Document successfully updated!');
      } catch (error) {
        console.error('Error updating document: ', error);
      }
}

export default editUserShippingDetailsFromFirebase