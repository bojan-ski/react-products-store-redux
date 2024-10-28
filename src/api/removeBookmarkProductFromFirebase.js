// firebase/firestore funcs
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../firebase.config";
// toastify
import { toast } from "react-toastify";


const removeBookmarkProductFromFirebase = async (userID, docID) => {
  try {
    // Reference to the document in the bookmarkedProducts subcollection
    const bookmarkedProductsCollectionRef = doc(db, `users/${userID}/bookmarkedProducts/${docID}`);
    
    // Delete the document
    await deleteDoc(bookmarkedProductsCollectionRef);
    
    // success message
    toast.success('Bookmark has been removed')
  } catch (error) {
    // success message
    toast.error('There was a problem with removing the bookmark')
    console.error(error);
  }  
}

export default removeBookmarkProductFromFirebase