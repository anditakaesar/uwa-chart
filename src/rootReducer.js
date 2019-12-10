import { combineReducers } from 'redux';
import { checklistReducer } from './checklist/checklist.reducers';
import { chartReducer } from './chart/chart.reducers';

export const rootReducer = combineReducers({
    checklists: checklistReducer,
    charts: chartReducer
});