import { fetchEvents } from '../API/eventsAPI';
import { addEvents, rewriteEvents } from '../storage/slices/eventsSlice';
import { IEventsRequestParams } from '../types';
import { useAppDispatch } from './useSelectorAndDispatch';

export const useFetchEventsAndStorageSave = () => {
    const dispatch = useAppDispatch();

    return async (params?: IEventsRequestParams, settings?: {rewrite?: boolean}) => {
        const events = await fetchEvents(params);
        if (events.length !== 0) {
            if (settings?.rewrite === true) {
                dispatch(rewriteEvents(events));
            } else {
                dispatch(addEvents(events));
            }
        }
    };
};