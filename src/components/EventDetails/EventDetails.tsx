import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/useSelectorAndDispatch';
import { useFetchEventDetailsAndStorageSave } from '../../hooks/useFetchEventDetailsAndStorageSave';
import { dateHumanize } from '../../helpers/dateHumanize';
import lodash from 'lodash';

interface IProps {
    eventId: string;
}

export const EventDetails = ({ eventId }: IProps) => {

    const currentEventDetails = useAppSelector(state => state.events.event_details);

    const fetchEventInfo = useFetchEventDetailsAndStorageSave();

    useEffect(() => {
        
        if (currentEventDetails !== null) {
            return;
        };
        fetchEventInfo(eventId);
    }, [currentEventDetails, eventId, fetchEventInfo]);

    return (
        <div className="bg-custom-white py-6 px-10 rounded-md min-h-[100vh]">
            {currentEventDetails && <div>
                <span className="text-orange font-medium">{dateHumanize(currentEventDetails.eventDate)}</span>
                <h2 className="mb-10">{`${currentEventDetails.title} ${new Date(currentEventDetails.eventDate).getFullYear()}`}</h2>
                <p className="mb-10 text-lg font-medium text-custom-grey">{currentEventDetails.description}</p>

                <div className="border-t-2 border-solid border-[#D3D3D3] mt-16 pt-4">
                    <h3 className="mb-4">"{currentEventDetails.title}" partisipants</h3>
                    {currentEventDetails.subscribers.length !== 0 && <ul className="flex flex-wrap gap-6">
                        {currentEventDetails.subscribers.map(({ email, name}) => {
                            return (
                                <li key={email} className="py-2 px-4 rounded-md bg-orange-light flex flex-col items-start cursor-pointer hover:bg-orange-md w-[200px] transition-colors">
                                    <span className="font-medium mb-2">{lodash.capitalize(name)}</span>
                                    <span className="font-medium">{email}</span>
                                </li>
                            );
                        })}
                    </ul>}
                </div>
                
            </div>}
        </div>
    );
};