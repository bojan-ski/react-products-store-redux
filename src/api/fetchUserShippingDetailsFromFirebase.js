// firebase/firestore funcs
import { getAuth } from "firebase/auth";
import { collection, doc, getDocs } from "firebase/firestore"
import { db } from "../firebase.config";

const fetchUserShippingDetailsFromFirebase = async () => {
    const auth = getAuth()

    if (!auth.currentUser) return null

    try {
        const userDocRef = doc(db, `users/${auth.currentUser.uid}`);
        const userShippingDetailsRef = collection(userDocRef, 'shippingDetails');

        const querySnapshot = await getDocs(userShippingDetailsRef);

        if(!querySnapshot.docs[0]) return null        

        const userShippingDetails = {
            ShippingDetailsDocID: querySnapshot.docs[0].id,
            ShippingDetailsData: querySnapshot.docs[0].data()
        };        
        
        // console.log(userShippingDetails);       
        return userShippingDetails;
    } catch (error) {
        // error message
        console.log(error);

        return null
    }
}

export default fetchUserShippingDetailsFromFirebase