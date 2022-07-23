import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Bases/Footer";
import Header from "../Bases/Header";

export default class AppLayout extends React.Component{
    render() {
        return(
            <div className="layout-container">
                <Header/>
                <Outlet/>
                <Footer/>
                </div>
        )
    }
}