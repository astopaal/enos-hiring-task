import React from 'react'
import EnosIcon from '../../assets/icons/enos-icon.png'
type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className="bg-navbarBackground w-full h-20 flex items-center">
            <div className='max-w-7xl w-full flex justify-between mx-auto my-auto font-inter text-navbarText'>
                <p className='text-2xl font-bold'>Enos Weather Forecaster</p>
                <img className='size-7' src={EnosIcon} alt="" />
            </div>
        </div>
    )
}

export default Navbar