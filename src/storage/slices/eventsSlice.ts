import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISubscriber } from '../../types';

export interface IEvent {
    id: string;
    title: string;
    description: string;
    eventDate: string;
    organizer: string;
    event_available_status: 'available' | 'expired';
}

export interface IEventInfo extends Omit<IEvent, 'available_status'> {
    subscribers: ISubscriber[];
}

export interface IEventState {
    list: IEvent[],
    total_count_events: number;
    event_details: IEventInfo | null;
}

const initialState: IEventState = {
    list: [],
    total_count_events: 0,
    event_details: null
}; 

export const eventsSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setTotalCount: (state, action: PayloadAction<number>) => {
            state.total_count_events = action.payload;
        },
        addEvents: (state, action: PayloadAction<IEvent[]>) => {
            state.list = [
                ...state.list,
                ...action.payload,
            ];
        },
        rewriteEvents: (state, action: PayloadAction<IEvent[]>) => {
            state.list = action.payload;
        },
        removeAllEvents: (state) => {
            state.list = initialState.list;
        },
        setEventDetails: (state, action: PayloadAction<IEventInfo>) => {
            console.log(action.payload)
            state.event_details = action.payload;
        },
        clearEventDetailsData: (state) => {
            state.event_details = initialState.event_details;
        }
    }

});

export const { addEvents, removeAllEvents, rewriteEvents, setTotalCount, setEventDetails, clearEventDetailsData } = eventsSlice.actions;
export default eventsSlice.reducer;