import {config} from './config';

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