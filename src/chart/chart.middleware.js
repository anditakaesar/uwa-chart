import { FETCH_CHART, CHART, updateChart } from "./chart.action";
import { apiRequest, API_SUCCESS, API_ERROR } from '../api/api.action';
import { setNotification } from "../notification/notification.action";
import { ENV } from "../env";
import { populateData } from "./chart.helper";

export const chartMiddleware = () => (next) => (action) => {
  next(action);

  // to perform api call, set notif, set ui
  switch (action.type) {
  case FETCH_CHART:
    next(apiRequest({
      body: {},
      method: 'GET',
      url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ENV.DEFAULT_SYMBOL}&apikey=${ENV.API_KEY}`,
      config: {
        headers: {'Content-Type': 'application/json'}
      },
      feature: CHART
    }));
    next(setNotification({message: 'fetching data chart', feature: CHART}))
    break;
        
  case `${CHART} ${API_SUCCESS}`:
    // console.log(action.payload);
    let outputData = populateData(action.payload);
    next(updateChart({payload: outputData}));
    next(setNotification({ message: 'fetching data done', feature: CHART }));
    break;

  case `${CHART} ${API_ERROR}`:
    console.log(action.payload);
    next(setNotification({ message: 'fetching data error', feature: CHART }));
    break;


  default:
    break;
  }
}