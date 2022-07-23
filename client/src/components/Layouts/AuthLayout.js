import React from "react";
import { Outlet } from "react-router-dom";

export default class AuthLayout extends React.Component {
    render() {
        return (
            <div className="layout-container">
                <Outlet />

            </div>
        )
    }
}