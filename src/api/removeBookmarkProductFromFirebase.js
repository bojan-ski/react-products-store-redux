// firebase/firestore funcs
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../firebase.config";

const removeBookmarkProductFromFirebase = async (userID, docID) => {
//   console.log(userID);
//   console.log(docID);

  try {
    // Reference to the document in the bookmarkedProducts subcollection
    const bookmarkedProductsCollectionRef = doc(db, `users/${userID}/bookmarkedProducts/${docID}`);
    
    // Delete the document
    await deleteDoc(bookmarkedProductsCollectionRef);
    
    // success message
    alert('Bookmark has been removed')
  } catch (error) {
    console.log(error);
  }  
}

export default removeBookmarkProductFromFirebase