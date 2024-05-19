import axios from 'axios';
import { config } from '../config';
import { ISubscribeData } from '../types';
const BASE_URL = `${config.serverUrls.local}`;

export const subscribeUser = async (data: ISubscribeData): Promise<{email: string, message: string}> => {

    const response = await axios.post(`${BASE_URL}/api/subscribe`, data);
    
    return {
        email: response.data.email,
        message: 'Success!'
    };
};