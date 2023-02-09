import React from "react";
import './index.scss';
import { Input } from "antd";


const NewsLetter = props => {

    return (
        <>
            <div className="newsletter">
                <h1 className="newsletter-header">
                    Sign up for our newsletters
                </h1>
                <div className="newsletter-control">
                    <Input placeholder="enter your email" />
                    <button className="btn-solid">Subscribe</button>
                </div>
            </div>
        </>
    )
}

export default NewsLetter;