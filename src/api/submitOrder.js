// firebase/firestore funcs
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config";
// utils func 
import getCurrentTimeAndDate from "../utils/getCurrentTimeAndDate";


const submitOrder = async (userProfileDetails, orderData) => {
    try {
        const orderDataCopy = {
            ...orderData,
            orderCreatedBy: userProfileDetails.userName,
            userID: userProfileDetails.userID,
            timestamp: serverTimestamp(),
            orderCreated: getCurrentTimeAndDate()
        }     

        // Add a new document to the orders collection
        await addDoc(collection(db, 'orders'), orderDataCopy);

        // update user store credits
        await updateDoc(doc(db, 'users', userProfileDetails.userID), {
            storeCredit: userProfileDetails.userStoreCredit,
        });

        return true
    } catch (error) {
        return false
    }
}

export default submitOrder