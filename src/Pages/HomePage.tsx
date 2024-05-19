
import { useEffect, useState } from 'react';
import { useFetchEventsAndStorageSave } from '../hooks/useFetchEventsAndStorageSave';
import { useAppSelector } from '../hooks/useSelectorAndDispatch';
import { EventList } from '../components/EventList';
import { SortBar } from '../components/SortBar';
import { useInView } from 'react-intersection-observer';

export const HomePage = () => {

    const {list: eventsState, total_count_events} = useAppSelector(state => state.events);
    const fetchEvents = useFetchEventsAndStorageSave();

    const [isLoading, setIsLoading] = useState(false);
    
    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: false
    });

    useEffect(() => {
        if(eventsState.length === 0) {
            fetchEvents();
        }
    }, [eventsState.length, fetchEvents]);

    useEffect(() => {
        if (total_count_events === eventsState.length) {
            return;
        }
        if (inView && !isLoading) {
            setIsLoading(true);
            fetchEvents().finally(() => {
                setIsLoading(false);
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[inView, isLoading]);

    return (
        <>
            {eventsState.length !== 0 && 
            <>
                <div className="container mb-6">
                    <SortBar/>
                </div>

                <div className="container">
                    <EventList/>
                </div>
                <div ref={ref} style={{ height: '20px', background: 'transparent' }} />
            </>
            }
        </>
    );
};