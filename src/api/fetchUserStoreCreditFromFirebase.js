// firebase/firestore funcs
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';


const fetchUserStoreCreditFromFirebase = async (userEmail) => {
    const q = query(collection(db, 'users'), where('email', '==', userEmail));
    const querySnapshot = await getDocs(q);    

    let storeCredit 
    
    querySnapshot.forEach((doc) => {        
        storeCredit = doc.data().storeCredit
    });

    return storeCredit
}

export default fetchUserStoreCreditFromFirebase