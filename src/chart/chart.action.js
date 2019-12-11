// action
export const CHART = `[Chart]`;

// data action
export const FETCH_CHART = `${CHART} FETCH_CHART`;
export const FETCH_CHART_SYMBOL = `${CHART} FETCH_CHART_SYMBOL`;

// redux-action
export const UPDATE_CHART = `${CHART} UPDATE_CHART`;

export const fetchChart = () => ({
  type: FETCH_CHART,
  payload: null
});

export const fetchChartSymbol = ({symbol}) => ({
  type: FETCH_CHART_SYMBOL,
  payload: symbol
});

// redux-action creator
export const updateChart = ({payload}) => ({
  type: UPDATE_CHART,
  payload: payload
});