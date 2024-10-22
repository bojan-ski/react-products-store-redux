// firebase/firestore funcs
import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore"
import { db } from "../firebase.config";

const fetchUserOrderHistoryFromFirebase = async () => {
    const auth = getAuth()

    if (!auth.currentUser) return null

    try {
        const q = query(collection(db, 'orders'),
            where('userID', '==', auth.currentUser.uid),
            orderBy('timestamp', 'desc'))

        const querySnapshot = await getDocs(q)

        let userOrderHistory = []

        querySnapshot.forEach((order) => {
            // console.log(order);
            return userOrderHistory.push({
                id: order.id,
                data: order.data()
            })
        })

        return userOrderHistory
    } catch (error) {
        // error message
        console.log(error);
    }
}

export default fetchUserOrderHistoryFromFirebase