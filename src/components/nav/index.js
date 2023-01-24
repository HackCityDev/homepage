import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.scss';

import { FiChevronDown } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";


const NavBarComponent = props => {
    const navigate = useNavigate();
    return (
        <section className="navSection" id="nav">
            <nav className="navSection-navigation">
                <div className="navSection-navigation-logo" onClick={() => navigate('/')}>
                    <div className="navSection-navigation-logo-image">
                        <svg width="26" height="38" viewBox="0 0 26 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.62791 0C1.62441 0 0 1.62852 0 3.63742V34.3626C0 36.3715 1.62441 38 3.62791 38C5.6314 38 7.25582 36.3715 7.25582 34.3626V24.8832C7.25582 23.5439 8.33875 22.4583 9.67442 22.4583H15.1163C16.4519 22.4583 17.5349 23.5439 17.5349 24.8832V34.3626C17.5349 36.3715 19.1593 38 21.1628 38C23.1663 38 24.7907 36.3715 24.7907 34.3626V20.0334C24.7907 17.3549 22.6251 15.1835 19.9535 15.1835H9.67442C8.33875 15.1835 7.25582 14.0978 7.25582 12.7585V3.63742C7.25582 1.62852 5.6314 0 3.62791 0Z" fill="url(#paint0_linear_815_250)"/>
                            <path d="M20.5833 10.8854C23.255 10.8854 26 7.52837 26 4.84989C26 2.17141 23.8344 0 21.1628 0C18.4912 0 15.1667 2.17141 15.1667 4.84989C15.1667 7.52837 17.9117 10.8854 20.5833 10.8854Z" fill="url(#paint1_linear_815_250)"/>
                            <defs>
                                <linearGradient id="paint0_linear_815_250" x1="19.5" y1="4.63415" x2="8.89873" y2="36.8331" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#152A47"/>
                                    <stop offset="1" stop-color="#032555"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_815_250" x1="19.5" y1="4.63415" x2="8.89873" y2="36.8331" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#152A47"/>
                                    <stop offset="1" stop-color="#032555"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="navSection-navigation-logo-brand-name">HackCity</div>
                </div>
                <div className="navSection-navigation-links">
                    <ul className="navSection-navigation-links-nav">
                        {/* <li className="navSection-navigation-links-nav-item">
                            <span>
                                <span>About Us</span>
                            </span>
                        </li> */}
                        <li className="navSection-navigation-links-nav-item">
                            <a href="#">
                                <span>Services</span>
                                <span><FiChevronDown /></span>
                            </a>
                            <ul className="navSection-navigation-links-nav-item-dropdown">
                                <li className="navSection-navigation-links-nav-item-dropdown-item">Mobile App</li>
                                <li className="navSection-navigation-links-nav-item-dropdown-item">Web App</li>
                                <li className="navSection-navigation-links-nav-item-dropdown-item">Blockchain App</li>
                                <li className="navSection-navigation-links-nav-item-dropdown-item">Game Development</li>
                                <li className="navSection-navigation-links-nav-item-dropdown-item">Bot App</li>
                                <li className="navSection-navigation-links-nav-item-dropdown-item">PnP Microservices</li>
                            </ul>
                        </li>
                        {/* <li className="navSection-navigation-links-nav-item">
                            <a href="#">
                                <span>Blog</span>
                            </a>
                        </li> */}
                        <li className="navSection-navigation-links-nav-item">
                            <a href="#">
                                <span>Career</span>
                                <span>&nbsp;</span>
                            </a>
                        </li>
                        <li className="navSection-navigation-links-nav-item">
                            <a href="/contact-us">
                                <span>Contact Us</span>
                                <span>&nbsp;</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <Modal />        
            </nav>
        </section>
    )
}


const Modal = ({ show, command, children }) => {
    const [showw, setShoww] = useState(show);
    const navigate = useNavigate();

    const showHideClassName = showw ? "modal display-block" : "modal display-none";

    const style = {
        // marginRight: 100
    }
    
    return (
        <>
            <div className="navSection-navigation-misc" onClick={() => navigate('/hire-us')} style={style}>
            {/* <div className="navSection-navigation-misc" onClick={() => setShoww(true)} style={style}> */}
                <span>Hire Developers</span>
            </div>
            <div className={showHideClassName} onClick={() => setShoww(false)}>
                <section className="modal-main">
                    <div className="modal-main-content">
                        <div className="modal-main-content-close">
                            <span onClick={() => setShoww(false)}>Close</span>
                        </div>
                        <div className="modal-main-content-form">
                            {/* <p>This is the content of the modal</p> */}
                            <h1>How may we help you ?</h1>
                            <div className="modal-main-content-form-description">
                                <hr />
                                <p>All fields are required</p>
                                <hr />
                            </div>
                            <div className="modal-main-content-form-container">
                                <div>
                                    <p>Email</p>
                                    <input type="email" className="form-input" placeholder="sample@user.com" />
                                </div>
                                <div>
                                    <p>Subject</p>
                                    <input type="text" className="form-input" placeholder="HOW TO JOIN THE TEAM" />
                                </div>
                                <div>
                                    <p>Enter Message</p>
                                    <textarea className="form-textarea" />
                                </div>
                                
                                <button className="btn btn-solid" style={{width: '100%'}}>
                                    Hire Us
                                </button>
                            </div>
                        </div>
                       
                    </div>
                </section>
            </div>
        </>
    );
};

export default NavBarComponent;