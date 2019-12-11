import { checklistMiddleware } from "./checklist/checklist.middleware";
import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { chartMiddleware } from "./chart/chart.middleware";
import { apiMiddleware } from "./api/api.middleware";

const featureMiddlewares = [
    checklistMiddleware, chartMiddleware
]

// core middleware
const coreMiddleware = [
    apiMiddleware
]

// development
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let store = createStore(
    rootReducer,
    storeEnhancers(
        applyMiddleware(...featureMiddlewares, ...coreMiddleware)
    )
);