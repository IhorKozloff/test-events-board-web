
import { useEffect } from 'react';
import { useFetchEventsAndStorageSave } from '../hooks/useFetchEventsAndStorageSave';
import { useAppSelector } from '../hooks/useSelectorAndDispatch';
import { EventList } from '../components/EventList';

export const HomePage = () => {

    const eventsState = useAppSelector(state => state.events.list);

    const fetchFn = useFetchEventsAndStorageSave();

    useEffect(() => {
        if(eventsState.length === 0) {
            fetchFn();
        }
        
    }, [eventsState.length, fetchFn]);

    return (
        <>
            {eventsState.length !== 0 && <EventList/>}
        </>
    );
};