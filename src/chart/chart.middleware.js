export const chartMiddleware = () => (next) => (action) => {
    next(action);

    // to perform api call, set notif, set ui
    switch (action.type) {
        default:
            break;
    }
}