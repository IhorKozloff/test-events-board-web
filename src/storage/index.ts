import { configureStore } from '@reduxjs/toolkit';
import eventsSlice from './slices/eventsSlice';
import sortSettingsSlice from './slices/sortSettingsSlice';

export const globalStore = configureStore({
    reducer: {
        events: eventsSlice,
        sortSettings: sortSettingsSlice,
    },
});

export type RootState = ReturnType<typeof globalStore.getState>

export type AppDispatch = typeof globalStore.dispatch