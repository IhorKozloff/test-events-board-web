import axios from 'axios';
import { config } from '../config';
import { IEventsFetcnDataResponse, IEventsRequestParams } from '../types';
const BASE_URL = `${config.serverUrls.remote}`;

export const fetchEvents = async (params?: IEventsRequestParams): Promise<IEventsFetcnDataResponse> => {
    let queryString = '';

    if(params) {
        queryString = '?';
    }

    if (params?.limit) {
        queryString = `${queryString}&limit=${params.limit}`;
    }

    if (params?.offset) {
        queryString = `${queryString}&offset=${params.offset}`;
    }

    if (params?.sortBy) {
        queryString = `${queryString}&sortBy=${params.sortBy}&sortDirection=${params.sortDirection}`;
    }

    const response = await axios.get(`${BASE_URL}/api/events${queryString}`);

    const events = response.data.events.map((item: any) => {
        return {
            id: item.id,
            title: item.title,
            description: item.description,
            eventDate: item.eventDate,
            organizer: item.organizer,
            event_available_status: item.event_available_status,
        };
    });
    
    return {
        events,
        total_count_events: response.data.total_count_events,
    };
};

export const fetchEventDetails = async (eventId: string) => {
    const response = await axios.get(`${BASE_URL}/api/events/${eventId}`);
    return response.data;
};