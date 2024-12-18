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
            const data = order.data();

            userOrderHistory.push({
                id: order.id,
                data: {
                    ...data,
                    timestamp: data.timestamp.toDate().toISOString() // convert Timestamp, remove error from redux 
                }
            });
        })

        return userOrderHistory
    } catch (error) {
        return []
    }
}

export default fetchUserOrderHistoryFromFirebase