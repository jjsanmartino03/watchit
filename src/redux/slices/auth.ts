import {createAction, createSlice} from "@reduxjs/toolkit";

const initialState: {
    user: {
        username: string,
        name: string
    } | null,
    status: 'idle' | 'loading' | 'failed' | 'success',
    error: any
} = {
    user: null,
    status: "idle",
    error: null,
}

export const actionTypes = {
    FETCH_USER: "auth/fetchUser",
    SIGN_OUT: "auth/signOut",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoaded: (state, action) => {
            state.user = action.payload
            state.status = 'success'
        },
        userLoading: (state) => {
            state.status = 'loading'
        },
        userLoadFailed: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
        userSignedOut: (state) => {
            state.user = null
            state.status = 'idle'
        }
    },
})

export const fetchUser = createAction(actionTypes.FETCH_USER)
export const signOut = createAction(actionTypes.SIGN_OUT)

export const {
    userLoaded,
    userLoadFailed,
    userLoading,
    userSignedOut,
} = authSlice.actions

export default authSlice.reducer

