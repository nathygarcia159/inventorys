import { MoveRight } from 'lucide-react'
import React from 'react'

export const Card1 = () => {
  return (
   <div className='grid grid-cols-3 py-10'>
    <div>
    <img className='p-2  bg-slate-100' src="https://images.pexels.com/photos/7674500/pexels-photo-7674500.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
    <img className=' p-2' src="https://images.pexels.com/photos/7674495/pexels-photo-7674495.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />

    </div>
     <div className=''>
        <img className=' bg-slate-100 ' src="https://images.pexels.com/photos/12890888/pexels-photo-12890888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
     </div>
     <div className='flex flex-col items-center '>
        <h1 className='text-2xl lg:text-7xl '>UNDERARMOUR </h1>
        <h2 className="text-green-700 font-bold  lg:text-7xl " >MERIDIAN</h2>
        <h1 className='text-2xl  lg:text-7xl lg:pb-12'>COLLECTION</h1>
        <div className='bg-emerald-700  relative w-full h-full justify-items-center '> 
            <img className=' item-center lg:w-60 p-2 w-20 bg-white 'src="https://images.pexels.com/photos/4944311/pexels-photo-4944311.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <h1 className='text-center text-white lg:text-2xl  text-sm lg:px-16 md:py-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos quod ab expedita magnam voluptas eius ipsum! At incidunt architecto iure, 
            architecto iure, praesentium praesentium  architecto iure, praesentium </h1>
            <div className='bg-white p-4 flex justify-between gap-x-20'>SHOP MERIDIAN COLLECTION <MoveRight /></div>
            </div>
     </div>
   </div>
  )
}
