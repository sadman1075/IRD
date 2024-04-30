import React from 'react';
import Setthings from '../Settings/Setthings';
import { Link } from 'react-router-dom';

const Rightsidenav = () => {
    return (
        <div className="drawer drawer-end">
        <input id="RightSide" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <p>fdlajfdlsafjsalkj</p>
        </div> 
        <div className="drawer-side">
          <label htmlFor="RightSide" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu  p-4 w-full min-h-full bg-white text-base-content">
         
          <div>
          <div className='flex justify-between'>
            <p className='text-2xl font-bold'>সেটিংস</p>
          <div>
          <label htmlFor="RightSide" aria-label="close sidebar" className=" btn btn-white close ">
            X
         </label>
          </div>
          </div>

          <div className='sticky top-20'>
            <div className='ml-4 bg-white'>
            <p className='text-center text-xl font-bold'></p>

            <div className='ml-4 mt-10'>
                <label htmlFor="text" className='mb-4 font-bold'>আরবি ফন্ট সিলেক্ট করুন</label>

                <select className="select select-bordered w-full max-w-xs font-bold">
                    <option disabled selected >Me Quran</option>
                    <option className='font-bold'>KFGQ</option>
                    <option className='font-bold'>Me Quran</option>
                    <option className='font-bold'>Al Mushaf</option>
                    <option className='font-bold'>Amiri</option>
                    <option className='font-bold'>Arial</option>
                </select>
            </div>
            <div className='mt-10 ml-4'>
                <label htmlFor="text" className='mb-4 font-bold'>আরবি ফন্ট সাইজ</label>
                <input type="range" className="range  bg-green-600 mt-2 w-80" />
                <label htmlFor="text" className='mb-4 font-bold'>অনুবাদ ফন্ট সাইজ</label>
                <input type="range" className="range  bg-green-600 mt-2 w-80" />
            </div>
            <div className='mt-10 ml-4 flex justify-between mr-4'>
                <label htmlFor="text" className='mb-4 font-bold'>নাইট মোড</label>

                <input type="checkbox" value="synthwave" className="toggle theme-controller" />
            </div>
            </div>
            <div className='bg-green-600 mt-6 ml-4 p-2'>
                <p className='text-xl text-white font-bold'>আপনিও সদাকায়ে জারিয়াতে অংশ নিন</p>
                <p className=' text-white'>
                    আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে। আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র কাছে কবুল হবে।
                </p>

                <div className='text-center'>
                    <button className='mt-4 text-center  btn  bg-white text-green-600 hover:bg-white text-green-600'>সাপোর্ট করুন</button>
                </div>            
                </div>
        </div>
          </div>

           
          </ul>
        </div>
      </div>
    );
};

export default Rightsidenav;