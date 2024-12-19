// firebase/firestore funcs
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";


const fetchSelectedOrderDetailsFromFirebase = async (id) => {
    try {
        const docRef = doc(db, "orders", id);
        const docSnap = await getDoc(docRef);

        return docSnap.data()       
    } catch (error) {
        return null        
    }
}

export default fetchSelectedOrderDetailsFromFirebase