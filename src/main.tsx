import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Start from "@/components/view/Start.tsx";
import Question from "@/components/view/Question.tsx";
import Result from "@/components/view/Result.tsx";
import "./App.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={createBrowserRouter([
            {
                path: '/',
                element: <Start/>
            },
            {
                path: "/test",
                element: <Question/>
            },
            {
                path: "/result",
                element: <Result/>
            }
        ])}/>
    </React.StrictMode>,
)

