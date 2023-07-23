import axios from 'axios'

const roomsData = async () => {
    const response = await axios.get("http://localhost:5000/rooms")
    return response.data
}



export {roomsData}