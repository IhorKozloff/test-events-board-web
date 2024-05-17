import { useAppSelector } from '../../hooks/useSelectorAndDispatch';
import { EventItem } from './EventItem';

export const EventList = () => {
    const eventsState = useAppSelector(state => state.events.list);
    
    return (<>
        <ul>
            {eventsState.map(item => {

                const itemData = {
                    description: item.description,
                    eventDate: item.eventDate,
                    event_available_status: item.event_available_status,
                    organizer: item.organizer,
                    title: item.title,
                };

                return (<li key={item.id}>
                    <EventItem 
                        itemData={itemData}
                    />
                </li>);
            })}
        </ul>
    </>);
};