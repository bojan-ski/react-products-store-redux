// firebase/firestore funcs
import { collection, doc, getDocs } from "firebase/firestore"
import { auth, db } from "../firebase.config";


const fetchBookmarkedProductsToFirebase = async () => {
    if (!auth?.currentUser) return null

    try {
        const userDocRef = doc(db, `users/${auth?.currentUser?.uid}`);
        const bookmarkedProductsCollectionRef = collection(userDocRef, 'bookmarkedProducts');

        const querySnapshot = await getDocs(bookmarkedProductsCollectionRef);
    
        // Extract data from each document
        const bookmarkedProducts = querySnapshot.docs.map((doc) => {
            const data = doc.data();
        
            return {
                docID: doc.id,
                productData: {
                    ...data,
                    timestamp: data.timestamp?.toDate().toISOString() // convert Timestamp, remove error from redux
                }
            };
        });
             
        return bookmarkedProducts;
    } catch (error) {
        return null
    }
}

export default fetchBookmarkedProductsToFirebase