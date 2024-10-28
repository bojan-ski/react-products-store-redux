import { useContext, createContext, useState, useEffect } from "react";
// firebase/firestore funcs
import { getAuth, onAuthStateChanged } from "firebase/auth"
// api func
import fetchUserStoreCreditFromFirebase from "./api/fetchUserStoreCreditFromFirebase";
// toastify


const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const auth = getAuth()    

    const [userProfileDetails, setUserProfileDetails] = useState({
        userID: '',
        userName: '',
        userStoreCredit: 0
    })

    // const fetchUserDetails = async () => {       
    //     onAuthStateChanged(auth, async (user) => {
    //         if (user) {
    //             const storeCredit = await fetchUserStoreCreditFromFirebase(user.email);
    //             setUserProfileDetails({
    //                 userID: user.uid,
    //                 userName: user.displayName,
    //                 userStoreCredit: storeCredit || 0
    //             });
    //         } else {
    //             setUserProfileDetails({
    //                 userID: '',
    //                 userName: '',
    //                 userStoreCredit: 0,
    //             });
    //         }
    //     });
    // };

    // useEffect(()=>{
    //     console.log('context');
        
    //     fetchUserDetails()
    // },[])

    return <AppContext.Provider value={{       
        userProfileDetails
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)