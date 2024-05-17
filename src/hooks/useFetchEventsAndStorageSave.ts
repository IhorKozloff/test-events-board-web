import { fetchEvents } from '../API/eventsAPI';
import { saveEvents } from '../storage/slices/eventsSlice';
import { useAppDispatch } from './useSelectorAndDispatch';

export const useFetchEventsAndStorageSave = () => {
    const dispatch = useAppDispatch();
    return async () => {
        const events = await fetchEvents();
        if (events.length !== 0) {
            dispatch(saveEvents(events));
        }
    }
};