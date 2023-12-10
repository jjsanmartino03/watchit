import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals.pcss'
import {RouterProvider} from "react-router-dom";
import router from "./utils/router.tsx";

import {Amplify} from 'aws-amplify';
import config from './amplifyconfiguration.json';
import store from "./redux/store.ts";
import {Provider} from "react-redux";

Amplify.configure(config);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)
