import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import eventsSlice from './slices/eventsSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const eventsPersistConfig = {
    key: 'issues',
    storage,
};

const eventsPersistedReducer = persistReducer(eventsPersistConfig, eventsSlice);

export const globalStore = configureStore({
    reducer: {
        events: eventsPersistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(globalStore);

export type RootState = ReturnType<typeof globalStore.getState>

export type AppDispatch = typeof globalStore.dispatch