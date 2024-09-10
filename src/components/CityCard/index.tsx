import React from 'react'

type Props = {}

const CityCard = (props: Props) => {
    return (
        <div className='w-[360px] border border-borderGray rounded-xl p-10 flex flex-col items-center text-center justify-center gap-[10px] font-inter text-cardText'>
            <p className='text-[32px] font-bold'>Select a City</p>
            <p className='font-normal text-base leading-[19.36px]'>Search and select a city to see results. Try typing the first letters of the city you want.</p>
        </div>
    )
}

export default CityCard