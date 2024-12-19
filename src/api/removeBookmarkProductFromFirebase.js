// firebase/firestore funcs
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../firebase.config";


const removeBookmarkProductFromFirebase = async (userID, docID) => {
  try {
    // Reference to the document in the bookmarkedProducts subcollection
    const bookmarkedProductsCollectionRef = doc(db, `users/${userID}/bookmarkedProducts/${docID}`);
    
    // Delete the document
    await deleteDoc(bookmarkedProductsCollectionRef);
    
    return true
  } catch (error) {
    return false
  }  
}

export default removeBookmarkProductFromFirebase