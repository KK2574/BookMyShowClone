import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const MedNav = () => {
    return (
        <div className=''>
            <div className="flex mt-9 justify-between w-full max-h-28 max-w-[1240px] mx-auto">
                <div className='font-bold text-xl'>Recommended Movies</div>
                <div className='flex align-center justify center'>
                    <div className='text-red-600'>See All </div>
                    <div className='mt-1 l-1'><MdKeyboardArrowRight /></div>
                </div>
            </div>

            <div className="movies mx-auto flex   align-center justify-center w-50 h-50 object-cover">
                <div className=' flex max-w-[1240px] gap-x-[25px] gap-y-[8px] overflow-hidden max-h-[442px]'>
                  <img className='max-w-[224px] rounded-[10px]' src="./movies/1.png" alt="" />
                  <img className='max-w-[224px] rounded-[10px]' src="./movies/2.png" alt="" />
                  <img className='max-w-[224px] rounded-[10px]' src="./movies/3.png" alt="" />
                  <img className='max-w-[224px] rounded-[10px]' src="./movies/4.png" alt="" />
                  <img className='max-w-[224px] rounded-[10px]' src="./movies/5.png" alt="" />
                  <img className='max-w-[224px] rounded-[10px]' src="./movies/6.png" alt="" />
                  <img className='max-w-[224px] rounded-[10px]' src="./movies/7.png" alt="" />
                  <img className='max-w-[224px] rounded-[10px]' src="./movies/8.png" alt="" />
                  <img className='max-w-[224px] rounded-[10px]' src="./movies/9.png" alt="" />
                  <img className='max-w-[224px] rounded-[10px]' src="./movies/10.png" alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default MedNav