import React from 'react';

import firstImage from '../assests/image 118.png';
import secondImage from '../assests/image 119.png';
import thirdImage from '../assests/image 126.png';

const HomePageCards = () => {
  return (
   <div className='flex flex-col gap-y-[10px]'>
    
    <div className=' flex flex-col w-[227px] h-[150px] bg-[#FFF0C4] rounded-[6px]'>
        <div className='flex items-center text-left pl-2'>
        <div className='text-[14px] mb-2'>
            Looking For a product?
        </div>
        <img src={firstImage} className='h-[86px] w-[107px]' />
        </div>
        <div className='mt-2'>
            <button className='border border-[#CF7E4A] rounded-[6px] px-2 py-2 text-[#CF7E4A]'>Post Buy Requirement</button>
        </div>
    </div>

    <div className='w-[227px] h-[150px] bg-[#E3696E] rounded-[6px]'>
        <div className='flex items-center'>
        <div className='text-[14px] text-white text-left pl-2'>
        Want to Grow Business 10X faster?
        </div>
        <img src={secondImage} className='h-[80px] w-[100px]' />
        </div>
        <div className='mt-2'>
            <button className='border border-white rounded-[6px] px-2 py-2 text-white'>Post Buy Requirement</button>
        </div>
    </div>
    
    <div className='w-[227px] h-[150px] bg-[#EC9B40] rounded-[6px]'>
        <div className='flex items-center'>
        <div className='text-[14px] text-left pl-2'>
           Need Instant Loan?
        </div>
        <img src={thirdImage} className='h-[86px] w-[107px]'/>
        </div>
        <div className='mt-2'>
            <button className='border border-white rounded-[6px] px-2 py-2 text-white'>Post Buy Requirement</button>
        </div>
    </div>
   </div>
  )
}

export default HomePageCards