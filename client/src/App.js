import React from "react";
import { Routes,Route } from "react-router-dom";
import AppLayout from "./components/Layouts/AppLayout";
import AuthLayout from "./components/Layouts/AuthLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

export default class App extends React.Component{
  render() {
    return(
      <div>
        <Routes>
          <Route element={<AppLayout/>}>
            <Route path="/" element={<HomePage/>}/>
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </div>
    )
  }
}