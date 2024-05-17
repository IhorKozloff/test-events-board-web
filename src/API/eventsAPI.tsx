import axios from 'axios';
import { config } from '../config';
import { IEvent } from '../storage/slices/eventsSlice';
const BASE_URL = `${config.serverUrls.local}`;

export const fetchEvents = async (params?: any): Promise<IEvent[]> => {
    const response = await axios.get(`${BASE_URL}/api/events`);

    const result = response.data.map((item: any) => {
        return {
            id: item.id,
            title: item.title,
            description: item.description,
            eventDate: item.eventDate,
            organizer: item.organizer,
            event_available_status: item.event_available_status,
        };
    });
    
    return result;
};