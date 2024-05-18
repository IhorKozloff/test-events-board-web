import axios from 'axios';
import { config } from '../config';
import { IEvent } from '../storage/slices/eventsSlice';
import { IEventsRequestParams } from '../types';
const BASE_URL = `${config.serverUrls.local}`;

export const fetchEvents = async (params?: IEventsRequestParams): Promise<IEvent[]> => {
    let queryString = '';
    // `
    //     ${params?.limit ? `limit=${params.limit}`:''}
    //     ${params?.offset ? `&offset=${params.offset}`:''}
    //     ${params?.sortBy ? `&sortBy=${params.sortBy}&sortDirection=${params.sortDirection}`:''}
    // `;

    if(params) {
        queryString = '?';
    }

    if (params?.limit) {
        queryString = `${queryString}limit=${params.limit}`;
    }

    if (params?.offset) {
        queryString = `${queryString}offset=${params.offset}`;
    }

    if (params?.sortBy) {
        queryString = `${queryString}sortBy=${params.sortBy}&sortDirection=${params.sortDirection}`;
    }

    const response = await axios.get(`${BASE_URL}/api/events${queryString}`);

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