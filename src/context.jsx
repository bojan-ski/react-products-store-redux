import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// firebase/firestore funcs
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
// api func
import fetchUserStoreCreditFromFirebase from "./api/fetchUserStoreCreditFromFirebase";
// toastify
import { toast } from "react-toastify";


const AppContext = createContext()

export const AppProvider = ({ children }) => {
    // search and filter options
    const [availableProducts, setAvailableProducts] = useState(0)
    const [updatedURL, setUpdatedURL] = useState('')
    const [productsList, setProductsList] = useState([])

    // pagination
    const [currentPageNumber, setCurrentPageNumber] = useState(1)

    // compare products
    const [compareProductsList, setCompareProductsList] = useState([])

    // user details
    const auth = getAuth()
    const navigate = useNavigate()

    const [userProfileDetails, setUserProfileDetails] = useState({
        userID: '',
        userName: '',
        userStoreCredit: 0
    })

    const fetchUserDetails = async () => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const storeCredit = await fetchUserStoreCreditFromFirebase(user.email);
                setUserProfileDetails({
                    userID: user.uid,
                    userName: user.displayName,
                    userStoreCredit: storeCredit || 0
                });
            } else {
                setUserProfileDetails({
                    userID: '',
                    userName: '',
                    userStoreCredit: 0,
                });
            }
        });
    };

    useEffect(()=>{
        fetchUserDetails()
    },[])

    // log out user
    const logOutUser = async () => {
        if (window.confirm('Are you sure you want to log out')) {
            try {
                await signOut(auth)

                setUserProfileDetails({
                    userID: '',
                    userName: '',
                    userStoreCredit: 0
                })

                // success message
                toast.success('you have successfully logged out');

                // after the user has logged out, the user is redirected to the Dashboard page
                navigate('/')
            } catch (error) {
                //error message
                toast.error('There was an error, please try again')
                console.log(error);
            }
        }
    }  

    return <AppContext.Provider value={{
        availableProducts, // ProductsList, Pagination
        setAvailableProducts, // ProductsList, SearchFeature, FilterFeature
        updatedURL, // Pagination
        setUpdatedURL, // FilterFeature
        productsList, // ProductsList, 
        setProductsList, // ProductsList, SearchFeature, FilterFeature, Pagination
        currentPageNumber, // Pagination, CustomPagination
        setCurrentPageNumber, // Pagination, CustomPagination, SearchFeature, FilterFeature, SearchAndFilter, ProductsList
        compareProductsList, // ProductsListCard, CompareProducts
        setCompareProductsList, // ProductsListCard
        userProfileDetails, // Profile, Onboarding, PrivateRoute, ProductsListCard, CartCostDetails, CheckoutForm, SelectedOrder, OrderCostDetails
        setUserProfileDetails, // OrderCostDetails
        logOutUser, // Profile, Onboarding
        navigate, // ForgotPassword
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)