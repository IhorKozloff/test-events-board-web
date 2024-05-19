import { useAppSelector } from '../../hooks/useSelectorAndDispatch';
import { EventItem } from './EventItem';

export const EventList = () => {
    const eventsState = useAppSelector(state => state.events.list);

    return (<>
        <ul className="flex flex-wrap justify-between gap-4">
            {eventsState.map((item, index) => {
                return (<li key={item.id} className="cursor-pointer hover:scale-105 transition duration-150 ease-out hover:ease-in">
                    <EventItem 
                        itemData={item}
                    />
                </li>);
            })}
        </ul>
    </>);
};