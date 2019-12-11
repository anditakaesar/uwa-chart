// action
export const CHART = `[Chart]`;

// data action
export const FETCH_CHART = `${CHART} FETCH_CHART`;

// redux-action
export const UPDATE_CHART = `${CHART} UPDATE_CHART`;

export const fetchChart = () => ({
  type: FETCH_CHART,
  payload: null
});

// redux-action creator
export const updateChart = ({payload}) => ({
  type: UPDATE_CHART,
  payload: payload
});