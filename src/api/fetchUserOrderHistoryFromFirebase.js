// firebase/firestore funcs
import { collection, getDocs, query, where, orderBy } from "firebase/firestore"
import { auth, db } from "../firebase.config";

const fetchUserOrderHistoryFromFirebase = async () => {
    if (!auth?.currentUser) return null

    try {
        const q = query(collection(db, 'orders'),
            where('userID', '==', auth?.currentUser?.uid),
            orderBy('timestamp', 'desc'))

        const querySnapshot = await getDocs(q)

        let userOrderHistory = []

        querySnapshot.forEach((order) => {
            return userOrderHistory.push({
                id: order.id,
                data: order.data()
            })
        })

        return userOrderHistory
    } catch (error) {
        return null
    }
}

export default fetchUserOrderHistoryFromFirebase