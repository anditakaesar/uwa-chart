// action
export const CHART = `[Chart]`;

export const FETCH_CHART = `${CHART} FETCH_CHART`;

export const fetchChart = () => ({
    type: FETCH_CHART,
    payload: null
});