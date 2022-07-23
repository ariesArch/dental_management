import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
render() {
    return (
        <div className="section-container">
            <nav>
                <ul className="main-menu">
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/">Patients</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/">Old</Link>
                            </li>
                            <li>
                                <Link to="/">Current</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/">Setting</Link>
                    </li>
                    <li>
                        <Link to="/">Profile</Link>
                    </li>
                    <li>
                        <Link to="/">Logout</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
}