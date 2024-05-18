import { dateHumanize } from '../../helpers/dateHumanize';
import { IEvent } from '../../storage/slices/eventsSlice';
import { EventCTAbar } from './EventCTAbar';

interface IProps {
    itemData: Omit<IEvent, 'id'>
}
export const EventItem = ({itemData}: IProps) => {
    const { title, organizer, description, eventDate, event_available_status} = itemData;
    
    return (
        <div className="w-[280px] h-[330px] border-2 border-solid border-black rounded-md px-2 pt-2 pb-4 flex flex-col justify-between">
            <div>
                <div className="text-sm font-bold">{dateHumanize(eventDate)}</div>
                <h3 className="">{title}</h3>
                <div className="no-scrollbar h-[150px] overflow-y-scroll mt-2">
                    <p className="text-eventDescription text-sm">{description}</p>
                </div>
                <div>{event_available_status}</div>
            </div>
            
            <div>
                <div className="text-xs font-bold mb-2">Organizer: <span className="font-medium text-headerTertiary">{organizer}</span></div>
                <EventCTAbar/>
            </div>
        </div>
    );
};