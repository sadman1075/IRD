import React from 'react';
import Header from '../Shared/Header/Header';
import { Link, Outlet } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Setthings from '../Settings/Setthings';
import Bukhari from '../Bukhari/Bukhari';
import Leftsidenavbar from '../Shared/leftside navbar/Leftsidenavbar';
import Rightsidenav from '../Shared/Rightsidenav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div class="grid grid-cols-12 gap-3 ">
                <div class="col-span-1 mt-0 h-ful bg-white hidden md:hidden lg:block ">
                    <Menu></Menu>
                </div>
                <div class="col-span-3 h-ful hidden md:hidden lg:block ">

                    <Outlet></Outlet>
                </div>
                <div class="col-span-3 h-ful block md:block lg:hidden ">

                    <Leftsidenavbar></Leftsidenavbar>
                </div>
                <div class="col-span-12 md:col-span-12 lg:col-span-5 h-full mt-6 bg-white">
                    <Bukhari></Bukhari>
                </div>
                <div class="lg:col-span-3 h-full  mt-6 hidden  md:hidden lg:block">
                    <Setthings></Setthings>


                </div>
                <div class="lg:col-span-3 h-full  mt-6 block  md:block lg:hidden">
                    <Rightsidenav></Rightsidenav>


                </div>

            </div>
        </div>
    );
};

export default Main;