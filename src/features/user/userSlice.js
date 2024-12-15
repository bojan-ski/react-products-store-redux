import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// firebase
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
// api func
import fetchUserStoreCreditFromFirebase from "../../api/fetchUserStoreCreditFromFirebase";
// toastify
import { toast } from "react-toastify";


// used in: AppLayout
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
                resolve({ userID: '', userName: '', userStoreCredit: 0 });
            }
        });
    });
});

// used in: Onboarding
export const logOutUser = createAsyncThunk("user/logOutUser", async (_, { rejectWithValue }) => {
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
            toast.error("There was an error, please try again");

            return rejectWithValue(error.message);
        }
    }
});

const initialUserState = {
    isLoading: false,
    userID: '',
    userName: '',
    userStoreCredit: 0,
};

// used in: Onboarding, Profile, OrderCostDetails
const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers:{
        updateUserStoreCredit: (state, { payload }) => {
            // console.log(payload);
            
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
                console.log(action);
                state.isLoading = false;
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
                console.log(action);
                state.isLoading = false;
            });
    }
});

export const {
    updateUserStoreCredit, // OrderCostDetails
} = userSlice.actions

export default userSlice.reducer;
