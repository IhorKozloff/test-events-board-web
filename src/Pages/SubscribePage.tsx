
import { useNavigate, useParams } from 'react-router-dom';
import { SubscribeForm } from '../components/SubscribeForm';
import { ISubscriber } from '../types';
import { subscribeUser } from '../API/subscribeAPI';

export const SubscribePage = () => {

    let { eventId } = useParams();
    const navigate = useNavigate();

    const onFormSubmit = async (subscriberData: ISubscriber) => {

        const result = await subscribeUser({
            ...subscriberData,
            subscribed_event_id: eventId!,
        });

        if (result.message === 'Success!') {
            navigate(`/${eventId}`);
        }
    };

    return (
        <div className="container">
            <SubscribeForm onFormSubmit={onFormSubmit}/>
        </div>
    );
};