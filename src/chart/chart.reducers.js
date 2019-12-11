import { initialState } from '../initialState';
import { FETCH_CHART, UPDATE_CHART } from './chart.action';

export const chartReducer = (mychart = initialState.mychart, action) => {
  let newChart;

  switch (action.type) {
  case FETCH_CHART:
    return mychart;

  case UPDATE_CHART:
    newChart = {...mychart};
    newChart.labels = action.payload.labels;
    let dataset = newChart.datasets[0];
    dataset.data = action.payload.data;
    dataset.label = action.payload.symbol;
    return newChart;

  default:
    return mychart;
  }
}