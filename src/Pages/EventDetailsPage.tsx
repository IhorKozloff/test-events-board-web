import { EventDetails } from '../components/EventDetails/EventDetails';
import { useParams } from 'react-router-dom';

export const EventDetailsPage = () => {
    let { eventId } = useParams();

    return <div className="details-page-bg">
        <div className="container">
            {eventId && <EventDetails eventId={eventId}/>}
        </div>
    </div>;
};