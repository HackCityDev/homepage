import React from "react";
import { useNavigate } from "react-router-dom";

const MiniHeader = props => {
    const navigate = useNavigate();
    return (
        <div className="hire-us-container-lefty-alt">
              <span className="hire-us-container-lefty-alt-arrow" onClick={() => navigate(props.uri, props.data? { state: props.data } : null)}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.1855 9L1.9995 9" stroke="url(#paint0_linear_857_1770-1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M5 13L1 8.5L5 4" stroke="url(#paint1_linear_857_1770-1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <defs>
                          <linearGradient id="paint0_linear_857_1770-1" x1="5.29601" y1="8.87805" x2="5.31205" y2="7.93913" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#152A47"/>
                              <stop offset="1" stop-color="#032555"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_857_1770-1" x1="2" y1="11.9024" x2="5.40865" y2="5.1774" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#152A47"/>
                              <stop offset="1" stop-color="#032555"/>
                          </linearGradient>
                      </defs>
                  </svg>
              </span>
              <div class="hire-us-container-lefty-alt-text">
                  <h1>Hire Us</h1>
                  <span>Step {props.step}</span>
              </div>
          </div>
    )
}

export const MiniHeaderN = props => {
    const navigate = useNavigate();
    return (
        <div className="hire-us-container-lefty-alt-noarrow">
              <div class="hire-us-container-lefty-alt-noarrow-text">
                  <h1>Hire Us</h1>
                  <span>{props.step}</span>
              </div>
          </div>
    )
}

export default MiniHeader;