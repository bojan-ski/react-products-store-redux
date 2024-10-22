// firebase/firestore funcs
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config";
// utils func 
import getCurrentTimeAndDate from "../utils/getCurrentTimeAndDate";
// toastify
import { toast } from "react-toastify"

const submitOrder = async (userProfileDetails, orderData) => {
    // console.log(userProfileDetails.userStoreCredit);    

    try {
        const orderDataCopy = {
            ...orderData,
            orderCreatedBy: userProfileDetails.userName,
            userID: userProfileDetails.userID,
            timestamp: serverTimestamp(),
            orderCreated: getCurrentTimeAndDate()
        }

        // console.log(orderDataCopy);        

        // const cleanedData = orderDataCopy.fromEntries(
        //     orderDataCopy.entries(data).filter(([_, v]) => v !== undefined)
        // );
        // console.log(cleanedData);       

        const userDocRef = doc(db, `users/${userProfileDetails.userID}`);

        // Reference to the orderHistory subcollection
        const orderHistoryCollectionRef = collection(userDocRef, 'orderHistory');

        // Add a new document to the orderHistory subcollection
        await addDoc(orderHistoryCollectionRef, orderDataCopy);

        // Add a new document to the orders collection
        await addDoc(collection(db, 'orders'), orderDataCopy);

        // update user store credits
        await updateDoc(doc(db, 'users', userProfileDetails.userID), {
            storeCredit: userProfileDetails.userStoreCredit,
        });

        return true
    } catch (error) {
        //error message
        toast.error('There was an error, please try again')
        console.log(error);

        return false
    }
}

export default submitOrder