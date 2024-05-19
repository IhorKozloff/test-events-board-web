import {config} from './config';
import { IEvent } from './storage/slices/eventsSlice';

const KnownSortOptionsTypes = [...config.CONSTANTS.SORT.sortOptionsDataSet.data.map(item => item.value)] as const;
export type SortOptionType = typeof KnownSortOptionsTypes[number];

const KnownSortDirectionsTypes = [...config.CONSTANTS.SORT.sortDirectionssDataSet.data.map(item => item.value)] as const;
export type SortDirectionType = typeof KnownSortDirectionsTypes[number];

export interface IEventsRequestParams {
    sortBy?: SortOptionType;
    sortDirection?: SortDirectionType;
    limit?: number;
    offset?: number;
}

export interface IEventsFetcnDataResponse {
    events: IEvent[];
    total_count_events: number;
}

export interface ISubscriber {
    name: string;
    email: string;
}

export interface ISubscribeData extends ISubscriber {
    subscribed_event_id: string;
}