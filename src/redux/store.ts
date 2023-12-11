import {configureStore, Middleware, Tuple} from "@reduxjs/toolkit";
import {UnknownAction} from "redux";
import createSagaMiddleware from '@redux-saga/core'
import authReducer from './slices/auth';
import rootSaga from "./saga.ts";
import moviesReducer from "./slices/movies.ts";

const sagaMiddleware = createSagaMiddleware()

export type RootState = {
    auth: ReturnType<typeof authReducer>,
    movies: ReturnType<typeof moviesReducer>,
}


const store = configureStore<RootState, UnknownAction, Tuple<ReadonlyArray<Middleware>>>({
    reducer: {
        auth: authReducer,
        movies: moviesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware as Middleware),
    devTools: true,
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export default store
