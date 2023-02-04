import React, {useState, useEffect} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import './index.scss';
import { OtherBrands } from "../index";
import { TeamStrengthTeam } from "./index1";

const JoinUs = props => {
   
    return (
        <>
            <section className="join-us">
                <div className="join-us-container">
                    <div className="join-us-container-text">
                        <h1>Join our Team</h1>
                        <p>Create Your Personal account profile</p>
                    </div>
                    <Outlet />
                    {/* <TeamStrengthTeam /> */}
                </div>
            </section>
            <OtherBrands />
        </>
    )
}

export default JoinUs;