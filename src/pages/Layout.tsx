import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';


type Props = {}

const DefaultLayout : React.FC = (props : Props) => {
    return (
        <div className="relative h-screen overflow-hidden">
            <Navbar />
            <div className={`flex h-screen overflow-x-hidden overflow-y-auto`}>
                <div className="flex-1 overflow-x-auto overflow-y-auto pb-20">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}


export default DefaultLayout