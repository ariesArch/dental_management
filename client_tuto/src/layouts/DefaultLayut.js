import React from "react";
import { Outlet } from "react-router-dom";
import PublicHeader from "../components/Base/PublicHeader";

export default class DefaultLayout extends React.Component{
    render() {
        return(
            <div className="layout-container">
                <PublicHeader/>
                <Outlet/>
            </div>
        )
    }
}