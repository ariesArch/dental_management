import React from "react"
import { Outlet } from "react-router-dom"
// import Header from "../components/Base/Header"
// import Sidebar from "../components/Base/Sidebar"

export default class AppLayout extends React.Component{
    render() {
        return(
            <div className="container-fluid p-2">
                <div className="row">
                    <nav className="col-md-2 flex-column">
                        <div className="list-group text-center text-lg-start">
                            <span className="list-group-item disabled d-none d-lg-block">
                                <small>Dental Management</small> </span>
                            <a href="#" className="list-group-item list-group-item-action active"> 
                            <i className="fas fa-home"></i>
                                <span className="d-none d-lg-inline">Dashboard</span>
                            </a>
                            </div>
                    </nav>
                    <main className="col-md-10">
                        <Outlet/>
                    </main>
                </div>
            </div>
        )
    }
}