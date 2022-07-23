import React from "react";
import { Link } from 'react-router-dom'
export default class PublicHeader extends React.Component {
    render() {
        return (
            <div className="base-container">
                <nav>
                    <ul className="main-menu">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/doctors">Services</Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/">Pre-Booking</Link>
                                </li>
                                <li>
                                    <Link to="/">Online Consultation</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}