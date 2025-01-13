import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// firebase
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
// api func
import fetchUserStoreCreditFromFirebase from "../../api/fetchUserStoreCreditFromFirebase";
// toastify
import { toast } from "react-toastify";


const initialUserState = {
    isLoading: false,
    userID: '',
    userName: '',
    userStoreCredit: 0,
};

// used in: AppLayout, Login
export const fetchUserDetails = createAsyncThunk("user/fetchUserDetails", async (_, { rejectWithValue }) => {
    return new Promise((resolve) => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const storeCredit = await fetchUserStoreCreditFromFirebase(user.email);

                    resolve({
                        userID: user.uid,
                        userName: user.displayName,
                        userStoreCredit: storeCredit || 0,
                    });
                } catch (error) {
                    rejectWithValue("Failed to fetch store credit");
                }
            } else {
                resolve({
                    userID: '',
                    userName: '',
                    userStoreCredit: 0
                });
            }
        });
    });
});

// used in: Auth
export const logOutUser = createAsyncThunk("user/logOutUser", async () => {
    if (window.confirm("Are you sure you want to log out")) {
        try {
            await signOut(auth);

            // success message
            toast.success("You have successfully logged out");

            // navigate user
            setTimeout(() => window.location.href = '/', 1500)

            return { userID: '', userName: '', userStoreCredit: 0 };
        } catch (error) {
            // error message
            toast.error("There was an error with the log out feature, please try again");
        }
    }
});

// used in: PrivateRoutes, Auth, SignUp, Login, ForgotPassword, Profile, OrderCostDetails, CheckoutForm
const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        updateUserStoreCredit: (state, { payload }) => {
            // loading true
            state.isLoading = true

            // update state
            state.userStoreCredit = payload

            // loading false
            state.isLoading = false
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserDetails.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUserDetails.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.userID = payload.userID;
                state.userName = payload.userName;
                state.userStoreCredit = payload.userStoreCredit;
            })
            .addCase(fetchUserDetails.rejected, (state, action) => {
                state.isLoading = false;

                // error message
                toast.error('There was an error with the auth feature, please try again')
            })
            .addCase(logOutUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logOutUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.userID = payload.userID;
                state.userName = payload.userName;
                state.userStoreCredit = payload.userStoreCredit;
            })
            .addCase(logOutUser.rejected, (state, action) => {
                state.isLoading = false;
            });
    }
});

export const {
    updateUserStoreCredit, // OrderCostDetails
} = userSlice.actions

export default userSlice.reducer;
