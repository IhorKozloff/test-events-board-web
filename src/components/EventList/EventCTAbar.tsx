import { Link } from 'react-router-dom';
import { clearEventDetailsData } from '../../storage/slices/eventsSlice';
import { useAppDispatch } from '../../hooks/useSelectorAndDispatch';

interface IProps {
    linkId: string;
}
export const EventCTAbar = ({linkId}: IProps) => {
    const dispatch = useAppDispatch();
    return (
        <div className="w-full flex items-end justify-between">
            <Link to={`/${linkId}/subscribe`} style={{color: 'blue'}} className="hover:scale-105 hover:font-bold">Register</Link>
            <Link to={`/${linkId}`} style={{color: 'blue'}} className="hover:scale-105 hover:font-bold" onClick={() => {
                dispatch(clearEventDetailsData());
            }}>View</Link>
        </div>
    );
};