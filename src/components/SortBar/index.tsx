import { config } from '../../config';
import { useFetchEventsAndStorageSave } from '../../hooks/useFetchEventsAndStorageSave';
import { useAppSelector, useAppDispatch } from '../../hooks/useSelectorAndDispatch';
import { setSortOption, setSortDirection } from '../../storage/slices/sortSettingsSlice';
import { CustomSelect } from './SelectButton/CustomSelect';

export const SortBar = () => {

    const {sort_options, sort_direction} = useAppSelector(state => state.sortSettings);
    const dispatch = useAppDispatch();
    const fetchEvents = useFetchEventsAndStorageSave();
    
    const sortSettingsApplyHandler = () => {
        fetchEvents({rewrite: true});
    };

    const onSortOptionsSelectChange = (value: string) => {
        dispatch(setSortOption(value));
    };

    const onSortDirectionSelectChange = (value: string) => {
        dispatch(setSortDirection(value));
    };

    return (
        <div className="w-full flex gap-8 items-center">
            <div className="sort-value-select w-[300px]">
                <CustomSelect 
                    items={config.CONSTANTS.SORT.sortOptionsDataSet}
                    changeValue={onSortOptionsSelectChange}
                />
            </div>

            {sort_options !== null && <div className="sort-direction-select sort-value-select w-[200px]">
                <CustomSelect 
                    items={config.CONSTANTS.SORT.sortDirectionssDataSet}
                    changeValue={onSortDirectionSelectChange}
                />
            </div>}

            {sort_options !== null && sort_direction !== null && <div className="apply-btn">
                <button 
                    type="button"
                    onClick={sortSettingsApplyHandler} 
                    className="w-[60px] h-[36px] bg-[#4f46e5] rounded-md text-[#FFF] font-bold flex items-center justify-center hover:scale-105">
                        Apply
                </button>
            </div>}
        </div>
    );
};