import React from "react";

const Template = ( props ) => {

    return <>
        <div className="service-container-header">
            {props.title}
        </div>
        {props.children}
    </>
}

