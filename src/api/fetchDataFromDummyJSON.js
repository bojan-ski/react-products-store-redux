import axios from "axios"
// toastify
import { toast } from "react-toastify"


const fetchDataFromDummyJSON = async (updatedURL, path) => {
    const url = `${import.meta.env.VITE_DUMMYJSON_PRODUCTS_API_URL}`
    // console.log(updatedURL);
    // console.log(path);

    try {
        let response

        if (updatedURL == '') {
            response = await axios.get(`${url}${path}`)
            // console.log(`${url}${path}`);
        } else {
            response = await axios.get(`${url}${updatedURL}${path}`)
            // console.log(`${url}${updatedURL}${path}`);
        }

        const data = await response.data

        // console.log(data);
        
        return data
    } catch (error) {
        console.log(error);
        toast.error('There was an error fetching data. Please come back later')

        return null
    }
}

export default fetchDataFromDummyJSON