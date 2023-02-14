import React, { useEffect, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NewsLetter from "../../newsLetter";
import './index.scss';

const News = props => {
    const navigator = useNavigate();

    useEffect(() => {
        if(window.location.pathname == "/search"){
            navigator('/');
        }
    }, []);

    return (
        <div style={{marginButtom: '40px'}}>
            <section className="news">
                <Outlet />
            </section>
            <NewsLetter />
        </div>
    )
}

export default News;