// firebase/firestore funcs
import { getAuth } from "firebase/auth";
import { collection, doc, getDocs } from "firebase/firestore"
import { db } from "../firebase.config";

const fetchBookmarkedProductsToFirebase = async () => {
    const auth = getAuth()

    if (!auth.currentUser) return null

    try {
        const userDocRef = doc(db, `users/${auth.currentUser.uid}`);
        const bookmarkedProductsCollectionRef = collection(userDocRef, 'bookmarkedProducts');

        const querySnapshot = await getDocs(bookmarkedProductsCollectionRef);
    
        // Extract data from each document
        const bookmarkedProducts = querySnapshot.docs.map(doc => ({
          docID: doc.id,
          productData: doc.data()
        }));
        
        // console.log(bookmarkedProducts);       
        return bookmarkedProducts;
    } catch (error) {
        // error message
        console.log(error);

        return null
    }
}

export default fetchBookmarkedProductsToFirebase