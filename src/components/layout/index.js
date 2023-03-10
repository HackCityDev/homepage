import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import FooterComponent from "../footer";
import NavBarComponent from "../nav";
import "./index.scss";

const Layout = props => {

    return (
        <>
            <section className="layout">
                <NavBarComponent />
                <Outlet />
                <FooterComponent />
            </section>
        </>
    )
}

export default Layout;