import { useAppSelector } from '../../hooks/useSelectorAndDispatch';
import { EventItem } from './EventItem';

export const EventList = () => {
    const eventsState = useAppSelector(state => state.events.list);
    
    return (<>
        <ul className='flex flex-wrap justify-between gap-4'>
            {eventsState.map(item => {

                const itemData = {
                    description: item.description,
                    eventDate: item.eventDate,
                    event_available_status: item.event_available_status,
                    organizer: item.organizer,
                    title: item.title,
                };

                return (<li key={item.id} className="cursor-pointer hover:scale-105 transition duration-150 ease-out hover:ease-in">
                    <EventItem 
                        itemData={itemData}
                    />
                </li>);
            })}
        </ul>
    </>);
};