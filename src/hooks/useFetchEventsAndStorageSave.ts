import { fetchEvents } from '../API/eventsAPI';
import { addEvents, rewriteEvents, setTotalCount } from '../storage/slices/eventsSlice';
import { IEventsRequestParams } from '../types';
import { useAppDispatch, useAppSelector } from './useSelectorAndDispatch';

export const useFetchEventsAndStorageSave = () => {
    const courrentEventsTotalCount = useAppSelector(state => state.events.list.length);
    const { sort_direction, sort_options } = useAppSelector(state => state.sortSettings);
    const dispatch = useAppDispatch();

    return async (settings?: {rewrite?: boolean}) => {

        let queryParams: IEventsRequestParams = {
            
        };

        if (sort_options !== null) {
            queryParams.sortBy = sort_options;
        }

        if (sort_direction !== null) {
            queryParams.sortDirection = sort_direction;
        }

        if (settings?.rewrite === undefined) {
            queryParams.offset = courrentEventsTotalCount;
        }

        const {events, total_count_events} = await fetchEvents(queryParams);
        if (events.length !== 0) {
            if (settings?.rewrite === true) {
                dispatch(rewriteEvents(events));
                dispatch(setTotalCount(total_count_events));
            } else {
                dispatch(addEvents(events));
                if(courrentEventsTotalCount === 0) {
                    dispatch(setTotalCount(total_count_events));
                }
            }
        }
    };
};