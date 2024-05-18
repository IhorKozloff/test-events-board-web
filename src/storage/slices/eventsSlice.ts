import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IEvent {
    id: string;
    title: string;
    description: string;
    eventDate: string;
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
        }
    }

});

export const { addEvents, removeAllEvents, rewriteEvents } = eventsSlice.actions;
export default eventsSlice.reducer;