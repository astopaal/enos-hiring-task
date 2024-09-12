import React from 'react'
import EnosIcon from '/assets/icons/enos-icon.png'
type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className="bg-navbarBackground w-full h-20 flex items-center">
            <div className='w-[1040px] flex md:justify-between justify-center mx-auto my-auto font-inter text-navbarText'>
                <p className='text-2xl font-bold'>Enos Weather Forecaster</p>
                <img className='size-7 md:block hidden' src={EnosIcon} alt="" />
            </div>
        </div>
    )
}

export default Navbar