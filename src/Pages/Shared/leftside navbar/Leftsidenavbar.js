import React from 'react';
import { TbHexagonNumber1 } from "react-icons/tb";
import { TbHexagonNumber2 } from "react-icons/tb";
import { TbHexagonNumber3 } from "react-icons/tb";
import { TbHexagonNumber4 } from "react-icons/tb";
import { TbHexagonNumber5 } from "react-icons/tb";
import { TbHexagonNumber6 } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Leftsidenavbar = () => {
    return (
        <div>
            <div className="drawer">
                <input id="LeftSide" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="LeftSide" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-full min-h-full bg-white text-base-content">


                        <div className='flex justify-between'>
                            <p className='text-2xl font-bold'>ক্যাটাগরি</p>
                            <div>
                                <label htmlFor="LeftSide" aria-label="close sidebar" className=" btn btn-white close ">
                                    X
                                </label>
                            </div>
                        </div>

                        <div className=''>
                            <div className='flex mt-6 '>
                                <Link to='/books' className='btn bg-white hover:bg-primary w-1/2'>বই</Link>
                                <Link to='/chapter' className='btn bg-white hover:bg-primary w-1/2 '>অধ্যায়</Link>
                            </div>

                            <div className='  mt-6 ml-4 bg-white '>

                                <input type="text" placeholder="Search For filter" className="input input-bordered w-80 ml-4 " />
                                <div className='flex gap-3 mt-6 bg-white hover:bg-green-200 p-4'>
                                    <TbHexagonNumber1 className='text-5xl'></TbHexagonNumber1>
                                    <div>
                                        <p>ওহীর সূচনা অধ্যায়</p>
                                        <p>হাদিসের রেঞ্জ: ১ - ৭</p>
                                    </div>

                                </div>
                                <div className='flex gap-3 mt-6 hover:bg-green-200 p-4'>
                                    <TbHexagonNumber2 className='text-5xl'></TbHexagonNumber2>
                                    <div>
                                        <p>
                                            ঈমান</p>
                                        <p>হাদিসের রেঞ্জ:৮ - ৫৮</p>
                                    </div>

                                </div>
                                <div className='flex gap-3 mt-6 hover:bg-green-200 p-4'>
                                    <TbHexagonNumber3 className='text-5xl'></TbHexagonNumber3>
                                    <div>
                                        <p>ইল্‌ম</p>
                                        <p>হাদিসের রেঞ্জ: ৫৯ - ১৩৪</p>
                                    </div>

                                </div>
                                <div className='flex gap-3 mt-6 hover:bg-green-200 p-4'>
                                    <TbHexagonNumber4 className='text-5xl'></TbHexagonNumber4>
                                    <div>
                                        <p>ওজু</p>
                                        <p>হাদিসের রেঞ্জ: ১ - ৭</p>
                                    </div>

                                </div>
                                <div className='flex gap-3 mt-6 hover:bg-green-200 p-4'>
                                    <TbHexagonNumber5 className='text-5xl'></TbHexagonNumber5>
                                    <div>
                                        <p>গোসল</p>
                                        <p>হাদিসের রেঞ্জ: ২৪৮ - ২৯৩</p>
                                    </div>

                                </div>
                                <div className='flex gap-3 mt-6 hover:bg-green-200 p-4'>
                                    <TbHexagonNumber6 className='text-5xl'></TbHexagonNumber6>
                                    <div>
                                        <p>হায়েজ</p>
                                        <p>হাদিসের রেঞ্জ: ২৯৪ - ৩৩৩</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Leftsidenavbar;