import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Base/Header"

export default class AppLayout extends React.Component{
    render() {
        return(
            <div className="layout-container">
                <Header/>
                {/* Here will be your current page */}
                <Outlet/>
            </div>
        )
    }
}