import axios from 'axios';

const API_BASE_URL = 'http://192.168.24.1:3000/ticketing/admin'; // backend API base URL

export const adminLogin = async (loginData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, loginData);

    if (response.status === 201) {
        //console.log(response);
      return { success: true, data: response.status };
    } else {
      return { success: false, error: 'Login failed' };
    }
  } catch (error) {
    return { success: false, error: 'Login failed' };
  }
};

export default adminLogin; 