import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import { Layout } from './Layout';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Conversion } from "./components/currency-converter/Conversion";
import { ConversionHistory } from "./components/conversion-history/ConversionHistory";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Conversion />,
            },
            {
                path: 'history',
                element: <ConversionHistory />,
            }
        ]
    }
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
