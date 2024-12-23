// axios
import axios from "axios"


const fetchDataFromDummyJSON = async (updatedURL, path) => {
    const url = `${import.meta.env.VITE_DUMMYJSON_PRODUCTS_API_URL}`

    try {
        let response

        if (updatedURL == '') {
            response = await axios.get(`${url}${path}`)
        } else {
            response = await axios.get(`${url}${updatedURL}${path}`)
        }

        const data = await response.data
        
        return data
    } catch (error) {
        return null
    }
}

export default fetchDataFromDummyJSON