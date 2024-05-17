import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IEvent {
    id: string;
    title: string;
    description: string;
    eventDate: number;
    organizer: string;
    event_available_status: 'available' | 'expired';
}

export interface IEventState {
    list: IEvent[]
}

const initialState: IEventState = {
    list: [],
}; 

export const eventsSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        saveEvents: (state, action: PayloadAction<IEvent[]>) => {
            state.list = [
                ...state.list,
                ...action.payload,
            ];
        },
    }

});

export const { saveEvents } = eventsSlice.actions;
export default eventsSlice.reducer;