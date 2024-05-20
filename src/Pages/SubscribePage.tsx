
import { useNavigate, useParams } from 'react-router-dom';
import { SubscribeForm } from '../components/Subscribe Form/SubscribeForm';
import { ISubscriber } from '../types';
import { subscribeUser } from '../API/subscribeAPI';
import { useState } from 'react';
import Notiflix from 'notiflix';

export const SubscribePage = () => {

    let { eventId } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const onFormSubmit = async (subscriberData: ISubscriber) => {
        setIsLoading(true);
        const result = await subscribeUser({
            ...subscriberData,
            subscribed_event_id: eventId!,
        });
        setIsLoading(false);

        if (result.message === 'Success!') {
            Notiflix.Notify.success('Success!');
            navigate(`/${eventId}`, { replace: true });
            window.location.href = `/${eventId}`;
        } else {
            Notiflix.Notify.failure(result.message);
        }
    };

    return (
        <div className="container">
            <SubscribeForm onFormSubmit={onFormSubmit} isLoading={isLoading}/>
        </div>
    );
};