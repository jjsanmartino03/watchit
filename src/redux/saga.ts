import {call, put, takeLatest, apply} from 'redux-saga/effects';
import {userLoaded, userLoadFailed, userLoading, userSignedOut} from "./slices/auth.ts";
import {currentAuthenticatedUser, signOut} from "../services/auth.ts";
import {fetchMovies, moviesLoaded, moviesLoadFailed, moviesLoading} from "./slices/movies.ts";
import moviesApi from "../services/moviesApi.ts";
import actionTypes from "./action-types.ts";

function* signOutSagas(): Generator {
    try {
        yield call(signOut)
        yield put(userSignedOut())
    } catch (e) {
        yield put(userLoadFailed(e))
    }
}

function* fetchUser(): Generator {
    try {
        yield put(userLoading())
        const user = yield call(currentAuthenticatedUser)
        yield put(userLoaded(user));
    } catch (e) {
        yield put(userLoadFailed(e))
    }
}

function* fetchMoviesSaga(action: ReturnType<typeof fetchMovies>): Generator {
    try {
        yield put(moviesLoading())
        const movies = yield apply(moviesApi, 'getPopularMovies', [action.payload.page])
        console.log(movies)
        yield put(moviesLoaded(movies));
    } catch (e) {
        yield put(moviesLoadFailed(e))
    }
}

export default function* rootSaga() {
    yield takeLatest(actionTypes.FETCH_USER, fetchUser);
    yield takeLatest(actionTypes.SIGN_OUT, signOutSagas);
    yield takeLatest(actionTypes.FETCH_MOVIES, fetchMoviesSaga);
}