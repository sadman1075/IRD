import React from 'react';
import { CgHome } from "react-icons/cg";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { IoBookmarkOutline } from "react-icons/io5";
import { BiGridAlt } from "react-icons/bi";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { CgMenuBoxed } from "react-icons/cg";







const Menu = () => {
    return (
      <div className='sticky top-40'>
          <div className='hidden lg:grid justify-center gap-10 mt-24'>
            <CgHome className='text-4xl hover:text-green-600'></CgHome>
            <CgMenuBoxed className='text-4xl hover:text-green-600'></CgMenuBoxed>
            <HiOutlineBookOpen className='text-4xl hover:text-green-600'></HiOutlineBookOpen>
            <IoBookmarkOutline className='text-4xl hover:text-green-600'></IoBookmarkOutline>
            <BiGridAlt className='text-4xl hover:text-green-600'></BiGridAlt>
            <PiPaperPlaneTilt className='text-4xl hover:text-green-600'></PiPaperPlaneTilt>
        </div>
      </div>
    );
};

export default Menu;