import axios from "axios";

const API_BASE_URL = 'http://192.168.24.1:3000/ticketing/schedule-bus'; // backend API base URL

export const scheduleBus = async (entry) => {
    try{
        const response = await axios.put(`${API_BASE_URL}/${entry.id}`, entry);
        if(response.status === 200){
            return {success: true, data: response.status};
        }else{
            return {success: false, error: 'Schedule Bus failed'};
        }
    }catch(error){
        return {success: false, error: 'error'};
    }
};


export default scheduleBus;

