
export const apiMiddleware = ({ dispatch }) => (next) => (action) => {
    next(action);
    // Axios.defaults.headers.common['Authorization'] = _getToken();
    const body = action.payload;
    if (action.type.includes(API_REQUEST)) {
        const { method, url, config, feature } = action.meta;

        switch(method) {
            case 'POST':
                axiosPost({ dispatch, body: body, url: url, config: config, feature: feature});
                break;

            case 'GET':
                axiosGet({ dispatch, body: body, url: url, config: config, feature: feature});
                break;

            default:
                dispatch(apiError({error: `API ${method} is not supported`, feature: feature}));
                break;
            
        }
    }
};

const axiosGet = ({dispatch, body, url, config, feature}) => {
    Axios.get(url, body, config)
        .then(response => {
            dispatch(apiSuccess({response: response.data, feature: feature}));
        })
        .catch(error => {
            let message = error.message;
            if (error.response !== undefined) {
                message = error.response.data.message;
            }

            dispatch(apiError({error: message, feature: feature}));
        });
};