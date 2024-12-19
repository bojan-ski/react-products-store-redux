// firebase/firestore funcs
import { addDoc, doc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";


const saveBookmarkProductToFirebase = async (userID, product) => {   
    try {
        const productData = {
            ...product,
            timestamp: serverTimestamp()
        }

        const userDocRef = doc(db, `users/${userID}`);
    
        // Reference to the bookmarkedProducts subcollection
        const bookmarkedProductsCollectionRef = collection(userDocRef, 'bookmarkedProducts');
        
        // Add a new document to the bookmarkedProducts subcollection
       await addDoc(bookmarkedProductsCollectionRef, productData);

       return true
    } catch (error) {
       return false      
    }  
}

export default saveBookmarkProductToFirebase