import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import './Features.css';
const Features = () => {
    return (
        <div className="feature-bg bg-light py-4">
            <div className='container '>
                <div className='feature-heading'>
                    <h2> মাদরাসার  বৈশিষ্ট্য</h2>
                </div>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className='feature-text-1'>
                            <p> <FontAwesomeIcon className="check_icon" icon={faCircleCheck} /> নিরিবিলি, পরিচ্ছন্ন ও মনোরম পরিবেশ।</p>
                            <p> <FontAwesomeIcon className="check_icon" icon={faCircleCheck} /> অবিজ্ঞ ও ধৈর্যশীল প্রতিভাবন শিক্ষকমন্ডলী দ্বারা পরিচালিত।</p>
                            <p> <FontAwesomeIcon className="check_icon" icon={faCircleCheck} /> ইসলাম ও আধুনিক শিক্ষার অপূর্ব সমম্বয়ে বাংলা, অংক,ইংরেজী ও আরবির প্রতি সমান গুরুত্বারোপ।</p>
                            <p> <FontAwesomeIcon className="check_icon" icon={faCircleCheck} /> প্রতিদিনের পড়া প্রতিদিন আদায় করা।</p>
                            <p> <FontAwesomeIcon className="check_icon" icon={faCircleCheck} /> নীতি-নৈতিকতা সচ্চরিত্র গঠনের সর্বোচ্চ ব্যবস্থা গ্রহন।</p>
                            <p> <FontAwesomeIcon className="check_icon" icon={faCircleCheck} /> শিক্ষার্থীকে শৃঙ্খলাবোধ, সময়ানুবর্তিতা, শিষ্ঠাচার শিক্ষা দেয়া।</p>
                            <p> <FontAwesomeIcon className="check_icon" icon={faCircleCheck} /> শিশুদের সহজ, সরল ও বন্ধুসূলভ পদ্ধতিতে শিক্ষাদান।</p>
                            <p> <FontAwesomeIcon className="check_icon" icon={faCircleCheck} /> আলাদাভাবে কোন প্রাইভেটের প্রয়োজন হয় না।</p>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className='feature-text-2'>
                            <p> <FontAwesomeIcon className="check_icon" icon={faCircleCheck} /> শিক্ষার্থীদের জন্য সার্বক্ষণিক তত্ত্বাবধানের ব্যবস্থা।</p>
                            <p> <FontAwesomeIcon className="check_icon" icon={faCircleCheck} /> সুন্দর পরিষ্কার হাতের লেখা।</p>
                            <p> <FontAwesomeIcon className="check_icon" icon={faCircleCheck} /> মানসম্মত খাবার, নাস্তা, কাপড় ধোয়া, ইস্ত্রীসহ যাবতীয় সুবিধা।</p>
                            <p> <FontAwesomeIcon className="check_icon" icon={faCircleCheck} /> তালিম-তরবিয়্যতের উন্নতির লক্ষ্যে সাপ্তাহিক ইসলাহী মজলিস।</p>
                            <p> <FontAwesomeIcon className="check_icon" icon={faCircleCheck} /> অমনোযোগী ছাত্র-ছাত্রীদের প্রতি বিশেষ যত্ন।</p>
                            <p> <FontAwesomeIcon className="check_icon" icon={faCircleCheck} /> মেধা বিকাশের জন্য মাসিক ইসলামী সাংস্কৃতিক অনুষ্টান।</p>
                            <p> <FontAwesomeIcon className="check_icon" icon={faCircleCheck} /> গতানুগতিক সিলোবাস শেষ করা নয় বরং সংশিষ্ট বিষয়ের উপর শতভাগ যোগ্য করে গড়ে তোলা।</p>
                            <p> <FontAwesomeIcon className="check_icon" icon={faCircleCheck} /> মাদারাসার নিজস্ব গাড়ি করে ছাত্র-ছাত্রীদের আনা নেওয়ার সু-ব্যবস্থা।</p>
                            <p> <FontAwesomeIcon className="check_icon" icon={faCircleCheck} /> প্রতি মাসে একবার অভিভাবকদের সাথে মতবিনিময়।</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;