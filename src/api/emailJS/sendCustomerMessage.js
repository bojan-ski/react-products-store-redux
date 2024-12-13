import axios from "axios";


const sendCustomerMessage = async (data) => {
    try {
        await axios.post(`${import.meta.env.VITE_EMAILJS_URL}`, data)

       return true
    } catch (error) {
        return false
    }
}

export default sendCustomerMessage