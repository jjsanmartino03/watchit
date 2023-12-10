import {actionTypes as authActionTypes} from "./slices/auth.ts";
import {actionTypes as moviesActionTypes} from "./slices/movies.ts";

export default {
    ...authActionTypes,
    ...moviesActionTypes
}