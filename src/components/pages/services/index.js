import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ExtraHireUs } from "./template";
import { OtherBrands } from "../index";
import './index.scss';

const Services = ( props ) => {
    const navigator = useNavigate();

    useEffect(() => {
        if(window.location.pathname == "/search"){
            navigator('/');
        }
    }, []);

    return (
        <div style={{marginButtom: '40px'}}>
            <section className="services">
                <Outlet />
            </section>
            <OtherBrands />
        </div>
    )
}

export default Services;