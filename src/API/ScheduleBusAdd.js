import axios from 'axios';

const API_BASE_URL = 'http://192.168.24.1:3000/ticketing/schedule-bus'; // backend API base URL

export const ScheduleBusAdd = async (busData) => {
  try {
    // Convert bus_count to an integer
    busData.bus_count = parseInt(busData.bus_count, 10);

    const response = await axios.post(API_BASE_URL, busData);

    if (response.status === 201) {
      return { success: true, data: response.status };
    } else {
      return { success: false, error: 'Adding failed' };
    }
  } catch (error) {
    return { success: false, error: 'Adding failed' };
  }
};

export default ScheduleBusAdd;