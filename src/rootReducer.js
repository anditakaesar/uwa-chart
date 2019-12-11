import { combineReducers } from 'redux';
import { checklistReducer } from './checklist/checklist.reducers';
import { chartReducer } from './chart/chart.reducers';
import { notificationReducer } from './notification/notification.reducer';

export const rootReducer = combineReducers({
  checklists: checklistReducer,
  charts: chartReducer,
  notifications: notificationReducer
});