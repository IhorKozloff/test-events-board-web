import axios from 'axios';
import { config } from '../config';
import { ISubscribeData } from '../types';
const BASE_URL = `${config.serverUrls.remote}`;

export const subscribeUser = async (data: ISubscribeData): Promise<{email?: string, message: string}> => {

    try {
        const response = await axios.post(`${BASE_URL}/api/subscribe`, data);
    
        return {
            email: response.data.email,
            message: 'Success!'
        };
    } catch (err: any) {
        return {message: err.response.data.message};
    }
};