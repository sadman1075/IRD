import React from 'react';
import { TfiBook } from "react-icons/tfi";
import { ImBook } from "react-icons/im";
import { PiNumberOneBold } from "react-icons/pi";




const Oddai = () => {
    return (
        <div>
            <div className='flex p-4 justify-between my-4'>
                <div className='flex '> 
                <ImBook className='text-green-600 text-5xl'></ImBook>
                <div className='ml-4'>
                    <p className='text-2xl font-semibold '>সহিহ বুখারী</p>
                    <p>সর্বমোট হাদিস - ৭৫৬৩</p>
                </div>
                </div>
                <div>
                    <p className='text-2xl font-bold'>صحيح البخاري</p>
                </div>
            </div>

            <div className='flex mt-8 mb-6 ml-4'>
                <PiNumberOneBold className='text-4xl bg-green-600 text-white'></PiNumberOneBold>
                <p className='text-xl font-bold ml-4'>ওহীর সূচনা অধ্যায়</p>
            </div>
            <div className='mb-8'>
                <div className='flex p-4'>
                    <TfiBook className='text-2xl'></TfiBook>
                    <p className='ml-3'>১/১. অধ্যায়ঃ</p>
                </div>
                <p className='font-semibold mb-6 p-4'>আল্লাহ্‌র রসূল (সাল্লাল্লাহু 'আলাইহি ওয়া সাল্লাম)- এর প্রতি কীভাবে ওয়াহী [১] শুরু হয়েছিল।</p>
                <p className='p-4'>এ মর্মে আল্লাহ তা’আলার বাণীঃ “নিশ্চয়ই আমি আপনার প্রতি সেরূপ ওয়াহী প্রেরণ করেছি যেরূপ নূহ ও তাঁর পরবর্তী নবীদের প্রতি ওয়াহী প্রেরণ করেছিলাম”। (সূরা আন-নিসা ৪/১৬৩)</p>
            </div>
        </div>
    );
};

export default Oddai;