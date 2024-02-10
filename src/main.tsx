import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {ApolloClientProvider} from "@providers/apollo-client-provider";
import {RouterProvider} from "@providers/router-provider";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApolloClientProvider>
            <RouterProvider/>
        </ApolloClientProvider>
    </React.StrictMode>,
)
