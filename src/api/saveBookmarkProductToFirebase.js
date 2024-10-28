// firebase/firestore funcs
import { addDoc, doc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
// toastify
import { toast } from "react-toastify";

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

       // success message
       toast.success('Product has been bookmarked')
    } catch (error) {
        // success message
        toast.error('There was a problem with the bookmark feature')
        console.error(error);        
    }  
}

export default saveBookmarkProductToFirebase