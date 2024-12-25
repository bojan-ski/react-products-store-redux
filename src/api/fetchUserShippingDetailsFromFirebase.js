// firebase/firestore funcs
import { collection, doc, getDocs } from "firebase/firestore"
import { auth, db } from "../firebase.config";


const fetchUserShippingDetailsFromFirebase = async () => {
    if (!auth?.currentUser) return null

    try {
        const userDocRef = doc(db, `users/${auth?.currentUser?.uid}`);
        const userShippingDetailsRef = collection(userDocRef, 'shippingDetails');

        const querySnapshot = await getDocs(userShippingDetailsRef);

        if(!querySnapshot.docs[0]) return null        

        const userShippingDetails = {
            shippingDetailsDocID: querySnapshot.docs[0].id,
            shippingDetailsData: querySnapshot.docs[0].data()
        };       

             
        return userShippingDetails;
    } catch (error) {
        return null
    }
}

export default fetchUserShippingDetailsFromFirebase