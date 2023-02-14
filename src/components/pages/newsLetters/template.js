import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import mainBanner from "../../../images/news/image 345.png";
import mainBannerb from "../../../images/news/image 345b.png";
import banner1 from "../../../images/news/image 348.png";
import banner2 from "../../../images/news/image 349.png";
import banner3 from "../../../images/news/image 347.png";
import banner4 from "../../../images/news/image 346.png";

export const NewsDefaultContent = props => {
    const data = {
        featured: {
            id: 'aedsdf134wdsfsx',
            image: <img src={mainBanner} alt="Main Banner" />,
            tags: 'Hackathon',
            readTime: '2 mins to read',
            datePublished: '11th Jan. 2023',
            title: 'Largest Gathering of Techies in Lagos, Nigeria',
            paragraphs: [
                "sending an email using an email client or application you've configured to use SMTP2GO. We'll watch for it to make sure it's all working properly sending an email using an email client or application you've configured to use SMTP2GO. We'll watch for it to make sure it's all working properly",
                "sending an email using an email client or application you've configured to use SMTP2GO. We'll watch for it to make sure it's all working properly sending an email using an email client or application you've configured to use SMTP2GO. We'll watch for it to make sure it's all working properly ..."
            ],
        },
        latest: [
            {
                id: 'aedsdf134wdsfsx',
                image: <img src={banner1} alt="Interview" />,
                tags: 'Education',
                title: "Smash the Next Interview",
                readTime: '2 mins to read',
                datePublished: '11th Jan. 2023'
            },
            {
                id: 'aedsdf134wdsfsx',
                image: <img src={banner2} alt="Interview" />,
                tags: 'Finance',
                title: "Proper investment that yield results",
                readTime: '2 mins to read',
                datePublished: '11th Jan. 2023'
            },
            {
                id: 'aedsdf134wdsfsx',
                image: <img src={banner3} alt="Interview" />,
                tags: 'Education',
                title: "Proper investment that yield results",
                readTime: '2 mins to read',
                datePublished: '11th Jan. 2023'
            },
            {
                id: 'aedsdf134wdsfsx',
                image: <img src={banner4} alt="Interview" />,
                tags: 'Finance',
                title: "Proper investment that yield results",
                readTime: '2 mins to read',
                datePublished: '11th Jan. 2023'
            }
        ]
        
    }

    const navigate = useNavigate();

    return (
        <>
            <div className="news-header">
                <div className="news-header-content">
                    <h1>News & Events</h1>
                    <p>Get first-hand information about our events</p>
                </div>
            </div>
            <div className="news-container">
                <div className="news-container-body">
                    <div className="news-container-body-content">
                        <div className="news-container-body-content-left">
                            <h2>Featured Event</h2>
                            <div className="news-container-body-content-left-body">
                                {
                                    data?.featured?.image? <>{data?.featured?.image}</> : null
                                }
                                <div className="news-container-body-content-left-body-meta">
                                    <span className="news-container-body-content-left-body-meta-tags">{data?.featured?.tags}</span>
                                    <span className="news-container-body-content-left-body-meta-others">{data?.featured?.readTime}</span>
                                    <span className="news-container-body-content-left-body-meta-others">{data?.featured?.datePublished}</span>
                                </div>
                                <div className="news-container-body-content-left-body-article">
                                    <h1>{data?.featured?.title}</h1>
                                    <div className="news-container-body-content-left-body-article-paragraphs">
                                        {
                                            data?.featured?.paragraphs.map( paragraph => <p>{paragraph}</p>)
                                        }
                                    </div>
                                    <span className="news-container-body-content-left-body-article-more" onClick={() => navigate(`/news/${data?.featured?.id}`)}>Read more </span>
                                </div>
                            </div>
                        </div>
                        <div className="news-container-body-content-right">
                            <h2>Latest News</h2>
                            {
                                data.latest.map(article => <AsideItems data={article} showImage={true}/>)
                            }
                            <nav aria-label="Page navigation example" style={{alignSelf: 'center'}}>
                                <ul class="inline-flex items-center -space-x-px">
                                    <li>
                                        <a href="#" class="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                            <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                                            Previous
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                    </li>
                                    <li>
                                        <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                    </li>
                                    <li>
                                        <a href="#" aria-current="page" class="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                    </li>
                                    <li>
                                        <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                                    </li>
                                    <li>
                                        <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                                    </li>
                                    <li>
                                        <a href="#" class="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                            Next
                                            <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const NewsContentReader = props => {
    const { newsId } = useParams();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    console.log(newsId);
    const data = {
        [newsId]: {
            id: 'aedsdf134wdsfsx',
            image: <img src={mainBannerb} alt="Main Banner" />,
            tags: 'Hackathon',
            readTime: '2 mins to read',
            datePublished: '11th Jan. 2023',
            title: 'Largest Gathering of Techies in Lagos, Nigeria',
            paragraphs: [
                "sending an email using an email client or application you've configured to use SMTP2GO. We'll watch for it to make sure it's all working properly sending an email using an email client or application you've configured to use SMTP2GO. We'll watch for it to make sure it's all working properly",
                "sending an email using an email client or application you've configured to use SMTP2GO. We'll watch for it to make sure it's all working properly sending an email using an email client or application you've configured to use SMTP2GO. We'll watch for it to make sure it's all working properly The Lagos State Head of Service, Mr. Hakeem Muri-Okunola, announced the appointment in a statement made available by the Special Adviser to the Governor on Education, Mr Tokunbo Wahab, on Wednesday, according to a Nigerian Tribune report.",
                "Muri-Okunlola said Lafiaji-Okuneye’s appointment as substantive VC of the institution backdated to March 2022 and would run for only five years single tenure.",
                "The Special Adviser to the Governor on Education, Wahab, explained that Lafiaji-Okuneye’s elevation was in compliance with Section 8, Subsection (1) (C) and (D) of the Lagos State University of Education (LASUED) Law of 2021.",
                "He congratulated the new VC and urged her to consider her appointment as a call to higher responsibility.",
            ],
            action: true,
            actionText: "Click to apply",
        },
        recent: [
            {
                id: 'aedsdf134wdsfsx',
                image: <img src={banner1} alt="Interview" />,
                tags: 'Education',
                title: "Smash the Next Interview",
                readTime: '12 mins to read',
                datePublished: '11th Jan. 2023'
            },
            {
                id: 'aedsdf134wdsfsx',
                image: <img src={banner2} alt="Interview" />,
                tags: 'Finance',
                title: "Proper investment that yield results",
                readTime: '12 mins to read',
                datePublished: '11th Jan. 2023'
            },
            {
                id: 'aedsdf134wdsfsx',
                image: <img src={banner3} alt="Interview" />,
                tags: 'Education',
                title: "Proper investment that yield results",
                readTime: '12 mins to read',
                datePublished: '11th Jan. 2023'
            },
            {
                id: 'aedsdf134wdsfsx',
                image: <img src={banner4} alt="Interview" />,
                tags: 'Finance',
                title: "Proper investment that yield results",
                readTime: '12 mins to read',
                datePublished: '11th Jan. 2023'
            }
        ]
        
    }

    return (
        <>
            <div className="news-header">
                <div className="news-header-content">
                    <h1>{data.title}</h1>
                    {/* <p>Service</p> */}
                </div>
            </div>
            <div className="news-container">
                <div className="news-container-body">
                    <span className="news-container-body-back" onClick={() => navigate('/news')}>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.7077 11.4998H1.29102M1.29102 11.4998L11.4993 21.7082M1.29102 11.4998L11.4993 1.2915" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Back to News and Events
                    </span>
                    <div className="news-container-body-content-full">
                        <div className="news-container-body-content-full-left">
                            {data[newsId]?.image && <>{data[newsId]?.image}</>}
                            <h1>{data[newsId].title}</h1>
                            <div className="news-container-body-content-full-left-body-meta">
                                <span className="news-container-body-content-full-left-body-meta-tags">{data[newsId]?.tags}</span>
                                <span className="news-container-body-content-full-left-body-meta-others">{data[newsId]?.readTime}</span>
                                <span className="news-container-body-content-full-left-body-meta-others">{data[newsId]?.datePublished}</span>
                            </div>
                            <div className="news-container-body-content-full-left-paragraphs">
                                {
                                    data[newsId].paragraphs.map( paragraph => <p>{paragraph}</p>)
                                }
                            </div>
                            {data[newsId].action && <span className="news-container-body-content-full-left-paragraphs-action" onClick={() => setShowModal(true)}>{data[newsId].actionText}</span>}
                        </div>
                        <div className="news-container-body-content-full-right">
                            <h2>Recent News</h2>
                            {
                                data.recent.map((article, index) => <><AsideItems data={article} showImage={false} reverse={true}/>{index < data?.recent?.length - 1 && <hr />}</>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const AsideItems = props => {
    const data = props.data;
    const showImage = props.showImage;
    const reverse = props.reverse;

    return (
        <>
            <div className={`news-container-body-content${showImage? "" : '-full'}-right-content`}>
                {
                    showImage && <div className={`news-container-body-content${showImage? "" : '-full'}-right-content-barner`}>
                        {data?.image || null}
                    </div>
                }
                <div className={`news-container-body-content${showImage? "" : '-full'}-right-content-body ${reverse && 'reverse'}`}>
                    <span className={`news-container-body-content${showImage? "" : '-full'}-right-content-body-meta-tags`}>{data?.tags}</span>
                    <div className={`news-container-body-content${showImage? "" : '-full'}-right-content-body-meta-body`}>
                        <h1>{data?.title}</h1>
                        <div className={`news-container-body-content${showImage? "" : '-full'}${showImage? "-left" : '-right-content'}-body-meta`}>
                            <span className={`news-container-body-content${showImage? "" : '-full'}${showImage? "-left" : '-right-content'}-body-meta-others`}>{data?.readTime}</span>
                            <span className={`news-container-body-content${showImage? "" : '-full'}${showImage? "-left" : '-right-content'}-body-meta-others`}>{data?.datePublished}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const ExtraHireUs = props => {
    const navigate = useNavigate();
    return <div className="news-container-body-extra">
        <p>{props.extraText}</p>
        <button className="news-container-body-extra-button" onClick={() => navigate('/hire-us')}>{props.btnText}</button>
    </div>
}