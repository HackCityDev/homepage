import React, {useState, useEffect} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import './index.scss';
import { OtherBrands } from "../index";
import HireUs1 from "./index1";
import HireUs2 from "./index2";
import HireUs3 from "./index3";
import HireUs4 from "./index4";

const HireUs = props => {
   
    return (
        <>
            <Outlet />
            {/* <HireUs1 />
            <HireUs2 />
            <HireUs3 />
            <HireUs4 /> */}
            <OtherBrands />
        </>
    )
}

export default HireUs;