import { initialState } from '../initialState';
import { FETCH_CHART } from './chart.action';

export const chartReducer = (mychart = initialState.mychart, action) => {
    switch (action.type) {
        case FETCH_CHART:
            return mychart;
        default:
            return mychart;
    }
}