
import { useEffect } from 'react';
import { useFetchEventsAndStorageSave } from '../hooks/useFetchEventsAndStorageSave';
import { useAppDispatch, useAppSelector } from '../hooks/useSelectorAndDispatch';
import { EventList } from '../components/EventList';
import { SortBar } from '../components/SortBar';
import { removeAllEvents } from '../storage/slices/eventsSlice';

export const HomePage = () => {

    const eventsState = useAppSelector(state => state.events.list);
    
    const { sort_options, sort_direction} = useAppSelector(state => state.sortSettings);

    const fetchEvents = useFetchEventsAndStorageSave();

    const sortSettingsApplyHandler = () => {
        fetchEvents({
            sortBy: sort_options!,
            sortDirection: sort_direction!,
        }, {rewrite: true});
    };

    useEffect(() => {
        if(eventsState.length === 0) {
            fetchEvents();
        }
        
    }, [eventsState.length, fetchEvents]);

    return (
        <>
            {eventsState.length !== 0 && 
                <div className='container'>
                    <div className='mb-6'>
                        <SortBar onApplyBtnClick={sortSettingsApplyHandler}/>
                    </div>
                    <EventList/>
                </div>}
        </>
    );
};