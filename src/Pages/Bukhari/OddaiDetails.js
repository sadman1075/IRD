import React from 'react';
import { PiStarOfDavidLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { IoCopyOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { FiShare2 } from "react-icons/fi";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { LiaDirectionsSolid } from "react-icons/lia";

const OddaiDetails = () => {
    return (
        <div class="overflow-auto ">

            

        <div className='flex p-4'>
            <div><PiStarOfDavidLight className='text-3xl text-green-600'></PiStarOfDavidLight></div>
            <div className='text-xl ml-2 text-green-600'>১</div>
        </div>

        <div>
            <p className='mt-4 text-xl font-bold p-4'>حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ الزُّبَيْرِ، قَالَ حَدَّثَنَا سُفْيَانُ، قَالَ حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ الأَنْصَارِيُّ، قَالَ أَخْبَرَنِي مُحَمَّدُ بْنُ إِبْرَاهِيمَ التَّيْمِيُّ، أَنَّهُ سَمِعَ عَلْقَمَةَ بْنَ وَقَّاصٍ اللَّيْثِيَّ، يَقُولُ سَمِعْتُ عُمَرَ بْنَ الْخَطَّابِ ـ رضى الله عنه ـ عَلَى الْمِنْبَرِ قَالَ سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ ‏ "‏ إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ
            </p>

            <p className='mt-4 font-bold text-green-600 p-4'>‘আলক্বামাহ ইব্‌নু ওয়াক্কাস আল-লায়সী (রহঃ) থেকে বর্ণিত:</p>
            <p className='mt-6 font-bold  p-4'>আমি ‘উমর ইব্‌নুল খাত্তাব (রাঃ)-কে মিম্বারের উপর দাঁড়িয়ে বলতে শুনেছিঃ আমি আল্লাহর রসূল (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম)-কে বলতে শুনেছিঃ কাজ (এর প্রাপ্য হবে) নিয়ত অনুযায়ী। আর মানুষ তার নিয়ত অনুযায়ী প্রতিফল পাবে। তাই যার হিজরত হবে ইহকাল লাভের অথবা কোন মহিলাকে বিবাহ করার উদ্দেশ্যে- তবে তার হিজরত সে উদ্দেশ্যেই হবে, যে জন্যে, সে হিজরত করেছে। (৫৪, ২৫২৯, ৩৮৯৮, ৫০৭০, ৬৬৮৯, ৬৯৫৩; মুসলিম ২৩/৪৫ হাঃ ১৯০৭, আহমাদ ১৬৮) ( আধুনিক প্রকাশনী- ১, ইসলামিক ফাউন্ডেশন ১)</p>

        </div>

        <div className='flex justify-between mt-10'>
            <p>হাদিসের মান :<Link className='px-2 bg-green-600 text-white'>সহিহ হাদিস</Link></p>
            <div className='flex gap-4 mr-4 '>
                <IoCopyOutline className='text-xl font-bold'></IoCopyOutline>
                <CiBookmark className='text-xl font-bold'></CiBookmark>
                <FiShare2 className='text-xl font-bold'></FiShare2>
                <MdOutlineReportGmailerrorred className='text-xl font-bold'></MdOutlineReportGmailerrorred>
                <LiaDirectionsSolid className='text-xl font-bold'></LiaDirectionsSolid>
            </div>
        </div>


    </div>
    );
};

export default OddaiDetails;