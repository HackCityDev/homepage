import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.scss";

const FooterComponent = props => {
    const navigate = useNavigate();

    const { pathname } = useLocation();

    useEffect(() => {
        const scrollAnimate = setInterval(() => {
            window.scrollTo(0, window.scrollY - 10);
            if(window.scrollY == 0)
                clearInterval(scrollAnimate);
        }, 1)
    }, [pathname]);

    return (
        <section className="footer" id="nav">
           <footer className="footer-container">
                <div className="footer-container-top">
                    <div className="footer-container-top-brand">
                        <div className="footer-container-top-brand-detail">
                            <div className="footer-container-top-brand-detail-logo">
                                <svg width="28" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.83721 0C1.71813 0 0 1.71423 0 3.82886V36.1711C0 38.2858 1.71813 40 3.83721 40C5.95629 40 7.67442 38.2858 7.67442 36.1711V26.1929C7.67442 24.7831 8.81984 23.6403 10.2326 23.6403H15.9884C17.4011 23.6403 18.5465 24.7831 18.5465 26.1929V36.1711C18.5465 38.2858 20.2646 40 22.3837 40C24.5028 40 26.2209 38.2858 26.2209 36.1711V21.0877C26.2209 18.2683 23.9304 15.9826 21.1047 15.9826H10.2326C8.81984 15.9826 7.67442 14.8398 7.67442 13.43V3.82886C7.67442 1.71423 5.95629 0 3.83721 0Z" fill="white"/>
                                    <path d="M21.7708 11.4583C24.5966 11.4583 27.5 7.9246 27.5 5.10515C27.5 2.28569 25.2095 0 22.3837 0C19.558 0 16.0417 2.28569 16.0417 5.10515C16.0417 7.9246 18.9451 11.4583 21.7708 11.4583Z" fill="white"/>
                                </svg>
                            </div>
                            <div className="footer-container-top-brand-detail-text">
                                <p className="footer-brand-text-paragraph">
                                    A one-stop tech company specializing in the transformation of ideas into products and businesses; 
                                    as well as the training of curious students to become highly qualified developers
                                </p>
                                <div className="footer-container-top-brand-social">
                                    <span>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>window.open('https://www.linkedin.com/company/hackcity-tech/','_blank')}>
                                            <path d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z" fill="#C0C0C0"/>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>window.open('https://www.facebook.com/groups/hackcity.tech/','_blank')}>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 14.991 3.657 19.128 8.438 19.878V12.891H5.898V10H8.438V7.797C8.438 5.291 9.93 3.907 12.215 3.907C13.309 3.907 14.453 4.102 14.453 4.102V6.562H13.193C11.95 6.562 11.563 7.333 11.563 8.124V10H14.336L13.893 12.89H11.563V19.878C16.343 19.128 20 14.991 20 10Z" fill="#9CA3AF"/>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>window.open('https://www.instagram.com/p/CnOyHETMLYH/','_blank')}>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.315 0C12.745 0 13.099 0.0129999 14.123 0.0599999C15.187 0.109 15.914 0.278 16.55 0.525C17.2175 0.775874 17.8222 1.16936 18.322 1.678C18.8306 2.17777 19.2241 2.7825 19.475 3.45C19.722 4.086 19.891 4.813 19.94 5.877C19.988 6.944 20 7.284 20 10V10.08C20 12.723 19.988 13.067 19.94 14.123C19.891 15.187 19.722 15.914 19.475 16.55C19.2241 17.2175 18.8306 17.8222 18.322 18.322C17.8222 18.8306 17.2175 19.2241 16.55 19.475C15.914 19.722 15.187 19.891 14.123 19.94C13.056 19.988 12.716 20 10 20H9.92C7.277 20 6.933 19.988 5.877 19.94C4.813 19.891 4.086 19.722 3.45 19.475C2.7825 19.2241 2.17777 18.8306 1.678 18.322C1.16936 17.8222 0.775874 17.2175 0.525 16.55C0.278 15.914 0.109 15.187 0.0599999 14.123C0.0129999 13.099 0 12.744 0 10.315V9.685C0 7.255 0.0129999 6.901 0.0599999 5.877C0.109 4.813 0.278 4.086 0.525 3.45C0.775874 2.7825 1.16936 2.17777 1.678 1.678C2.17777 1.16936 2.7825 0.775874 3.45 0.525C4.086 0.278 4.813 0.109 5.877 0.0599999C6.901 0.0129999 7.256 0 9.685 0H10.315ZM10.234 1.802H9.766C7.31 1.802 6.982 1.813 5.959 1.86C4.984 1.905 4.455 2.067 4.102 2.204C3.635 2.386 3.302 2.602 2.952 2.952C2.602 3.302 2.386 3.635 2.204 4.102C2.067 4.455 1.904 4.984 1.86 5.959C1.813 6.982 1.802 7.31 1.802 9.766V10.234C1.802 12.69 1.813 13.018 1.86 14.041C1.905 15.016 2.067 15.545 2.204 15.898C2.386 16.364 2.603 16.698 2.952 17.048C3.302 17.398 3.635 17.614 4.102 17.796C4.455 17.933 4.984 18.096 5.959 18.14C7.013 18.188 7.329 18.198 10 18.198H10.08C12.677 18.198 12.997 18.188 14.04 18.14C15.016 18.095 15.545 17.933 15.898 17.796C16.364 17.614 16.698 17.398 17.048 17.048C17.398 16.698 17.614 16.365 17.796 15.898C17.933 15.545 18.096 15.016 18.14 14.041C18.188 12.986 18.198 12.671 18.198 10V9.92C18.198 7.323 18.188 7.003 18.14 5.96C18.095 4.984 17.933 4.455 17.796 4.102C17.6358 3.66757 17.3802 3.2746 17.048 2.952C16.7254 2.61986 16.3324 2.36426 15.898 2.204C15.545 2.067 15.016 1.904 14.041 1.86C13.018 1.813 12.69 1.802 10.234 1.802ZM10 4.865C10.6743 4.865 11.3421 4.99782 11.9651 5.25588C12.5881 5.51394 13.1542 5.89218 13.631 6.36901C14.1078 6.84584 14.4861 7.41191 14.7441 8.03492C15.0022 8.65793 15.135 9.32566 15.135 10C15.135 10.6743 15.0022 11.3421 14.7441 11.9651C14.4861 12.5881 14.1078 13.1542 13.631 13.631C13.1542 14.1078 12.5881 14.4861 11.9651 14.7441C11.3421 15.0022 10.6743 15.135 10 15.135C8.63811 15.135 7.33201 14.594 6.36901 13.631C5.40601 12.668 4.865 11.3619 4.865 10C4.865 8.63811 5.40601 7.33201 6.36901 6.36901C7.33201 5.40601 8.63811 4.865 10 4.865ZM10 6.667C9.11603 6.667 8.26827 7.01815 7.64321 7.64321C7.01815 8.26827 6.667 9.11603 6.667 10C6.667 10.884 7.01815 11.7317 7.64321 12.3568C8.26827 12.9818 9.11603 13.333 10 13.333C10.884 13.333 11.7317 12.9818 12.3568 12.3568C12.9818 11.7317 13.333 10.884 13.333 10C13.333 9.11603 12.9818 8.26827 12.3568 7.64321C11.7317 7.01815 10.884 6.667 10 6.667ZM15.338 3.462C15.6563 3.462 15.9615 3.58843 16.1865 3.81347C16.4116 4.03852 16.538 4.34374 16.538 4.662C16.538 4.98026 16.4116 5.28548 16.1865 5.51053C15.9615 5.73557 15.6563 5.862 15.338 5.862C15.0197 5.862 14.7145 5.73557 14.4895 5.51053C14.2644 5.28548 14.138 4.98026 14.138 4.662C14.138 4.34374 14.2644 4.03852 14.4895 3.81347C14.7145 3.58843 15.0197 3.462 15.338 3.462Z" fill="#9CA3AF"/>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>window.open('https://twitter.com/hackcity_tech','_blank')}>
                                            <path d="M6.29 16.2534C13.837 16.2534 17.965 10.0004 17.965 4.5784C17.965 4.4004 17.965 4.2234 17.953 4.0484C18.7562 3.46693 19.4493 2.74701 20 1.9224C19.2511 2.2544 18.4566 2.47216 17.643 2.5684C18.4996 2.05546 19.1408 1.24875 19.447 0.298398C18.6417 0.776285 17.7607 1.11313 16.842 1.2944C16.2234 0.636163 15.405 0.200233 14.5136 0.0541031C13.6222 -0.0920265 12.7075 0.0597974 11.9111 0.486067C11.1147 0.912337 10.4811 1.58927 10.1083 2.41206C9.7355 3.23485 9.64437 4.15758 9.849 5.0374C8.21759 4.95564 6.6216 4.53172 5.16465 3.79317C3.70769 3.05461 2.42233 2.01792 1.392 0.750398C0.867318 1.6536 0.706589 2.72282 0.942536 3.74036C1.17848 4.75791 1.79337 5.64728 2.662 6.2274C2.00926 6.2085 1.37063 6.0329 0.8 5.7154V5.7674C0.800389 6.71469 1.1284 7.6327 1.7284 8.36576C2.3284 9.09881 3.16347 9.60179 4.092 9.7894C3.48781 9.95411 2.85389 9.97806 2.239 9.8594C2.50116 10.6749 3.01168 11.388 3.69913 11.899C4.38658 12.41 5.21657 12.6934 6.073 12.7094C5.22212 13.378 4.24779 13.8722 3.20573 14.1639C2.16367 14.4556 1.07432 14.539 0 14.4094C1.8766 15.6137 4.06019 16.2525 6.29 16.2494" fill="#9CA3AF"/>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>window.open('https://github.com/hackcitydev','_blank')}>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017C0 14.442 2.865 18.197 6.839 19.521C7.339 19.613 7.521 19.304 7.521 19.038C7.521 18.801 7.513 18.17 7.508 17.335C4.726 17.94 4.139 15.992 4.139 15.992C3.685 14.834 3.029 14.526 3.029 14.526C2.121 13.906 3.098 13.918 3.098 13.918C4.101 13.988 4.629 14.95 4.629 14.95C5.521 16.48 6.97 16.038 7.539 15.782C7.631 15.135 7.889 14.694 8.175 14.444C5.955 14.191 3.62 13.331 3.62 9.493C3.62 8.4 4.01 7.505 4.649 6.805C4.546 6.552 4.203 5.533 4.747 4.155C4.747 4.155 5.587 3.885 7.497 5.181C8.31277 4.95851 9.15444 4.84519 10 4.844C10.85 4.848 11.705 4.959 12.504 5.181C14.413 3.885 15.251 4.154 15.251 4.154C15.797 5.533 15.453 6.552 15.351 6.805C15.991 7.505 16.379 8.4 16.379 9.493C16.379 13.341 14.04 14.188 11.813 14.436C12.172 14.745 12.491 15.356 12.491 16.291C12.491 17.629 12.479 18.71 12.479 19.038C12.479 19.306 12.659 19.618 13.167 19.52C15.1583 18.8521 16.8893 17.5753 18.1155 15.87C19.3416 14.1648 20.0009 12.1173 20 10.017C20 4.484 15.522 0 10 0Z" fill="#9CA3AF"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-container-top-nav">
                        <div className="footer-container-top-nav-section">
                            <h4 className="footer-container-top-nav-section-header">
                                <span>Solutions</span>
                            </h4>
                            <ul className="footer-container-top-nav-section-list">
                                <li className="footer-container-top-nav-section-list-item" onClick={() => navigate('/services/mobile')}>
                                    <span>Mobile App development</span>
                                </li>
                                <li className="footer-container-top-nav-section-list-item"  onClick={() => navigate('/services/web')}>
                                    <span>Web app development</span>
                                </li>
                                <li className="footer-container-top-nav-section-list-item">
                                    <span>Game development</span>
                                </li>
                                <li className="footer-container-top-nav-section-list-item">
                                    <span>Pnp Microsevices</span>
                                </li>
                                <li className="footer-container-top-nav-section-list-item"  onClick={() => navigate('/services/blockchain')}>
                                    <span>Blockchain Development</span>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-container-top-nav-section">
                            <h4 className="footer-container-top-nav-section-header">
                                <span>Legals</span>
                            </h4>
                            <ul className="footer-container-top-nav-section-list">
                                <li className="footer-container-top-nav-section-list-item">
                                    <span>Privacy Policy</span>
                                </li>
                                <li className="footer-container-top-nav-section-list-item">
                                    <span>Terms & Conditions</span>
                                </li>
                                <li className="footer-container-top-nav-section-list-item">
                                    <span>Licensing Agreement</span>
                                </li>
                                <li className="footer-container-top-nav-section-list-item">
                                    <span>Partnership Terms</span>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-container-top-nav-section">
                            <h4 className="footer-container-top-nav-section-header">
                                <span>Contact Us</span>
                            </h4>
                            <ul className="footer-container-top-nav-section-list">
                                <li className="footer-container-top-nav-section-list-item">
                                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.66667 1H16C16.9167 1 17.6667 1.75 17.6667 2.66667V12.6667C17.6667 13.5833 16.9167 14.3333 16 14.3333H2.66667C1.75 14.3333 1 13.5833 1 12.6667V2.66667C1 1.75 1.75 1 2.66667 1Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M17.6667 2.66406L9.33333 8.4974L1 2.66406" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                    <span>info@hackcity.tech</span>
                                </li>
                                <li className="footer-container-top-nav-section-list-item">
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5734 13.4334V15.9334C17.5744 16.1655 17.5268 16.3952 17.4339 16.6079C17.3409 16.8205 17.2045 17.0114 17.0335 17.1683C16.8625 17.3252 16.6606 17.4446 16.4407 17.519C16.2209 17.5934 15.9879 17.621 15.7568 17.6001C13.1925 17.3214 10.7293 16.4452 8.5651 15.0417C6.55162 13.7623 4.84454 12.0552 3.5651 10.0417C2.15675 7.86775 1.2803 5.39258 1.00676 2.81675C0.985939 2.5863 1.01333 2.35405 1.08718 2.13477C1.16104 1.91549 1.27974 1.71399 1.43574 1.5431C1.59173 1.37221 1.7816 1.23567 1.99326 1.14218C2.20491 1.04869 2.43371 1.0003 2.6651 1.00008H5.1651C5.56952 0.9961 5.96159 1.13931 6.26823 1.40302C6.57487 1.66674 6.77516 2.03295 6.83176 2.43341C6.93728 3.23347 7.13297 4.01902 7.4151 4.77508C7.52722 5.07335 7.55148 5.39751 7.48502 5.70915C7.41856 6.02079 7.26415 6.30684 7.0401 6.53341L5.98176 7.59175C7.16806 9.67803 8.89548 11.4055 10.9818 12.5917L12.0401 11.5334C12.2667 11.3094 12.5527 11.155 12.8644 11.0885C13.176 11.022 13.5002 11.0463 13.7984 11.1584C14.5545 11.4405 15.34 11.6362 16.1401 11.7417C16.5449 11.7989 16.9146 12.0028 17.1789 12.3147C17.4432 12.6266 17.5836 13.0247 17.5734 13.4334Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                    <span>+234906333385</span>
                                </li>
                                <li className="footer-container-top-nav-section-list-item">
                                    <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8.5C16 14.3333 8.5 19.3333 8.5 19.3333C8.5 19.3333 1 14.3333 1 8.5C1 6.51088 1.79018 4.60322 3.1967 3.1967C4.60322 1.79018 6.51088 1 8.5 1C10.4891 1 12.3968 1.79018 13.8033 3.1967C15.2098 4.60322 16 6.51088 16 8.5Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.5 11C9.88071 11 11 9.88071 11 8.5C11 7.11929 9.88071 6 8.5 6C7.11929 6 6 7.11929 6 8.5C6 9.88071 7.11929 11 8.5 11Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span>12000 Fairhill Rd <br></br>Cleveland, OH <br></br>44120-1035</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copywright">
                    <p className="footer-copywright-text">
                        &copy; {(new Date()).getFullYear()} Hackcity, Inc. All Rights Reserved.
                    </p>
                </div>
           </footer>
        </section>
    )
}

export default FooterComponent;