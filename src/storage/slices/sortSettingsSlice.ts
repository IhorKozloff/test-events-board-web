import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SortDirectionType, SortOptionType } from '../../types';

export interface ISortSettingsState {
    sort_options: SortOptionType | null;
    sort_direction: SortDirectionType | null;
}

const initialState: ISortSettingsState = {
    sort_options: null,
    sort_direction: null,
}; 

export const sortSettingsSlice = createSlice({
    name: 'sortSettings',
    initialState,
    reducers: {
        setSortOption: (state, action: PayloadAction<SortOptionType>) => {
            state.sort_options = action.payload;
        },
        setSortDirection: (state, action: PayloadAction<SortDirectionType>) => {
            state.sort_direction = action.payload;
        },
        setDefaultSortSetting: () => initialState,
    }

});

export const { setSortOption, setSortDirection, setDefaultSortSetting} = sortSettingsSlice.actions;
export default sortSettingsSlice.reducer;