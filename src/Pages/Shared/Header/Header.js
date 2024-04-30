import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineMenuBook } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { HiOutlineMenuAlt1 } from "react-icons/hi";





const Header = () => {
    return (
        <div className='sticky top-0'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        {/* <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden"> */}
                            <label tabIndex={2} htmlFor="LeftSide" role="button" className="btn btn-ghost navbar-end mr-4   lg:hidden">
                                <HiOutlineMenuAlt1 className='text-5xl'></HiOutlineMenuAlt1>
                            </label>
                        {/* </div> */}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        </ul>
                    </div>
                    <MdOutlineMenuBook className='text-5xl text-primary lg:mx-6' ></MdOutlineMenuBook >

                    <Link className="btn btn-ghost text-xl"><span>হাদিস সমূহ<br></br><small className='text-sm font-normal '>হাদিস পড়ুন শিখুন এবং জানুন</small></span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                    </ul>
                </div>

                <div className="navbar-end">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto hidden lg:block" />

                    <Link className="btn bg-primary hidden lg:block py-3 lg:ml-10">সাপোর্ট করুন</Link>
                </div>
                <label tabIndex={2} htmlFor="RightSide" role="button" className="btn btn-ghost navbar-end mr-6  lg:hidden">
                    <CiSettings className='text-3xl bg-green-600 text-white'></CiSettings>
                </label>
            </div>
        </div>


    );
};

export default Header;