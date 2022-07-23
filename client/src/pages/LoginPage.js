import React from "react";
import LoginForm from '../components/Forms/LoginForm'
export default class LoginPage extends React.Component{
    render() {
        const loginPage = {
            paddingTop:'20%'
        }
        return(
            <div className="page-container" style={loginPage}>
                <LoginForm />
            </div>
        )
    }
}