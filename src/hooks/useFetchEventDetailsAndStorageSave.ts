import { fetchEventDetails } from '../API/eventsAPI';
import { clearEventDetailsData, setEventDetails } from '../storage/slices/eventsSlice';

import { useAppDispatch, useAppSelector } from './useSelectorAndDispatch';

export const useFetchEventDetailsAndStorageSave = () => {

    const currentEventDetails = useAppSelector(state => state.events.event_details);
    const dispatch = useAppDispatch();

    return async (eventId: string) => {

        if (currentEventDetails !== null) {
            dispatch(clearEventDetailsData());
        };

        const response = await fetchEventDetails(eventId);
        if (response) {
            dispatch(setEventDetails(response));
        }
    };
};