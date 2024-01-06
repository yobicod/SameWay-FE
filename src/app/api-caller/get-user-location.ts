import axios from 'axios';
import { IUserLocation } from './interfaces/interfaces';
import { district } from '@/asset/district';

export const getUserLocation = async (): Promise<IUserLocation | undefined> => {
  try {
    // Get User Ip addreess
    const response = await axios.get('https://api.ipify.org?format=json');
    const ipAddress = response.data.ip;
    if (ipAddress) {
      // Get User location by Ip address
      const locationResponse = await axios.get(
        `http://ip-api.com/json/${ipAddress}`
      );
      const locationData = locationResponse.data;
      // Map with JSON (District)
      const [districtTh] = district.filter(
        (district) => district.name_en === locationData.city
      );

      // Return result
      const result: IUserLocation = {
        city: districtTh.name_th,
        zip: locationData.zip,
      };
      return result;
    } else {
      throw new Error('IP address not available');
    }
  } catch (error) {
    console.error('Error fetching IP or location:', error);
  }
};
