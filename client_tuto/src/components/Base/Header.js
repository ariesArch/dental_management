import React from "react";
import {Link} from 'react-router-dom'
export default class Header extends React.Component{
    render(){
        return(
            <div className="base-container">
                <nav>
                    <ul className="main-menu">
                        <li>
                           <Link to="/dashboard">Dashboard</Link> 
                        </li>
                        <li>
                            <Link to="/patients">Patients</Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/">Old Patients</Link>
                                </li>
                                <li>
                                    <Link to="/">Current Patients</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}