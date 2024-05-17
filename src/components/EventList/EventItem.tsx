import { IEvent } from "../../storage/slices/eventsSlice";
import { EventCTAbar } from "./EventCTAbar";

interface IProps {
    itemData: Omit<IEvent, 'id'>
}
export const EventItem = ({itemData}: IProps) => {
    const { title, organizer, description, eventDate, event_available_status} = itemData;
    
    return (
        <div className="border-2 border-solid border-black rounded-md px-2 py-4">
            <h3>{title}</h3>
            <p>{description}</p>
            <div>{event_available_status}</div>
            <div>{organizer}</div>
            <div>{eventDate}</div>
            <div className="mt-4">
                <EventCTAbar/>
            </div>
        </div>
    );
};