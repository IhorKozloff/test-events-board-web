import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
import eventsSlice from './slices/eventsSlice';
import sortSettingsSlice from './slices/sortSettingsSlice';
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';

// const eventsPersistConfig = {
//     key: 'events',
//     storage,
// };

// const sortSettingsPersistConfig = {
//     key: 'sortSettings',
//     storage,
// };
// const eventsPersistedReducer = persistReducer(eventsPersistConfig, eventsSlice);
// const sortSettingsPersistedReducer = persistReducer(sortSettingsPersistConfig, sortSettingsSlice);

export const globalStore = configureStore({
    reducer: {
        events: eventsSlice,
        sortSettings: sortSettingsSlice,
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //         },
    //     }),
});
//export const persistor = persistStore(globalStore);

export type RootState = ReturnType<typeof globalStore.getState>

export type AppDispatch = typeof globalStore.dispatch