// firebase/firestore funcs
import { addDoc, doc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";

const saveBookmarkProductToFirebase = async (userID, product) => {
    // console.log(product);
    // console.log(userID);
    
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
       alert('Product has been bookmarked')
    } catch (error) {
        console.log(error);        
    }  
}

export default saveBookmarkProductToFirebase