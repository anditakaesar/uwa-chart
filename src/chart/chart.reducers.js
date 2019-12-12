import { initialState } from '../initialState';
import { FETCH_CHART, UPDATE_CHART } from './chart.action';

export const chartReducer = (mychart = initialState.chart, action) => {
  let newChart;

  switch (action.type) {
  case FETCH_CHART:
    return mychart;

  case UPDATE_CHART:
    const { prices, meta } = action.payload;
    newChart = {...mychart};
    newChart.meta.symbol = meta.symbol;
    newChart.prices = prices;
    return newChart;

  default:
    return mychart;
  }
}