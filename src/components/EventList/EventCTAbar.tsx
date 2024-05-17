import { Link } from "react-router-dom";
import { IEvent } from "../../storage/slices/eventsSlice";
import { text } from "stream/consumers";

interface IProps {
    
}
export const EventCTAbar = () => {
    
    return (
        <div className="w-full flex items-end justify-between">
            <Link to={'/register'} style={{color: 'blue'}}>Register</Link>
            <Link to={'/view'} style={{color: 'blue'}}>View</Link>
        </div>
    );
};