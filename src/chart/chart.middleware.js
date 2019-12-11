import { FETCH_CHART, CHART } from "./chart.action";
import { apiRequest, API_SUCCESS, API_ERROR } from '../api/api.action';
import { setNotification } from "../notification/notification.action";

export const chartMiddleware = () => (next) => (action) => {
    next(action);

    // to perform api call, set notif, set ui
    switch (action.type) {
        case FETCH_CHART:
            next(apiRequest({
                body: {},
                method: 'GET',
                url: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=PTBA.JK&interval=5min&apikey=WM813GVUEF1M0OIC',
                config: {
                    headers: {'Content-Type': 'application/json'}
                },
                feature: CHART
            }));
            next(setNotification({message: 'fetching data chart', feature: CHART}))
            break;
        
        case `${CHART} ${API_SUCCESS}`:
            console.log(action.payload);
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