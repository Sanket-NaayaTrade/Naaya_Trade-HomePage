import React from 'react';

import camera from '../assests/camera.png';
import home from '../assests/home.png';
import beauty  from '../assests/beauty.png';
import fashion from '../assests/fashion.png';
import machinery from '../assests/macinery.png';
import vehicle from '../assests/vehicle.png';
import pet from '../assests/pet.png';
import sports from '../assests/sports.png';

const CategorySection = () => {
  return (
    <div className='flex w-[271px] h-[476px] rounded-[6px] bg-white border'>
           
    <div className=''>
        <div className='ml-[15px] flex gap-x-4 my-4'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>

    <div className='font-[600] text-[16px] text-left mb-2'>
        Top Categories
    </div>
        </div>

        <div className='flex text-[14px]'>
        <ul className='flex flex-col justify-center items-center ml-[15px] gap-y-[20px]'>

            <div className='flex items-center gap-x-3'>
            <div className='bg-gray-300 h-[27px] w-[27px] rounded-full'>
            <img src={camera} />
            </div>
            <li className='flex items-start justify-start w-[167.26px]'>
            Consumer Electronics
            </li>
            </div>
            
            <div className='flex items-center gap-x-3'>
            <div className='bg-gray-300 h-[27px] w-[27px] rounded-full'>
            <img src={fashion} />
            </div>
            <li className='flex items-start justify-start w-[167.26px]'>
            Fashion & Apparels
            </li>
            </div>

            <div className='flex items-center gap-x-3'>
            <div className='bg-gray-300 h-[27px] w-[27px] rounded-full'>
            <img src={home} />
            </div>
            <li className='flex items-start justify-start w-[167.26px]'>
            Home & Garden
            </li>
            </div>

            <div className='flex items-center gap-x-3'>
            <div className='bg-gray-300 h-[27px] w-[27px] rounded-full'>
            <img src={beauty} />
            </div>
            <li className='flex items-start justify-start w-[167.26px]'>
            Beauty & Personal Care
            </li>
            </div>

            <div className='flex items-center gap-x-3'>
            <div className='bg-gray-300 h-[27px] w-[27px] rounded-full'>
            <img src={pet} />
            </div>
            <li className='flex items-start justify-start w-[167.26px]'>
            Animal & Pet
            </li>
            </div>
            
            <div className='flex items-center gap-x-3'>
            <div className='bg-gray-300 h-[27px] w-[27px] rounded-full'>
            <img src={vehicle} />
            </div>
            <li className='flex items-start justify-start w-[167.26px]'>
            Vehicle Parts & Accessories
            </li>
            </div>

            <div className='flex items-center gap-x-3'>
            <div className='bg-gray-300 h-[27px] w-[27px] rounded-full'>
            <img src={machinery} />
            </div>
            <li className='flex items-start justify-start w-[167.26px]'>
            Industrial Machinery
            </li>
            </div>

            <div className='flex items-center gap-x-3'>
            <div className='bg-gray-300 h-[27px] w-[27px] rounded-full'>
            <img src={sports} />
            </div>
            <li className='flex items-start justify-start w-[167.26px]'>
            Sports & Entertainment
            </li>
            </div>
           
            <li className={`flex items-start justify-start w-[167.26px] text-[#ff6300] underline`}>
                View All Categories
            </li>
        </ul>
        </div>
    </div>
</div>
  )
}

export default CategorySection