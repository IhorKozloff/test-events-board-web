import moment from 'moment';

export const dateHumanize = (date: string): string => {
    return moment(date).format('MMMM Do YYYY');
};