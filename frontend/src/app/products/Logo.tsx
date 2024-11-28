import React from 'react'

const Logo = () => {
  return (
   <div className='mb-8'>
        <div className='flex justify-center w-full relative '>
            <div className='bg-blue-500 w-12'></div>
            <div>
                <img  className="" src="https://images.pexels.com/photos/14099910/pexels-photo-14099910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div>
                <img src="https://images.pexels.com/photos/4720799/pexels-photo-4720799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
                <span className='absolute text-white text-9xl'>ULIMATE</span>
                <span className='text-white absolute md:top-40 md:right-96 text-2xl lg:text-9xl'>confort</span>
                <span className='absolute text-white  md:right-96 text-sm lg:text-4xl bottom-12 '>Rest & Recovery</span>
                <div className=' absolute py-2 flex justify-between bg-slate-50 rounded-md text-blue-300 md:-right-1 mx-10 px-6 text-2xl bottom-12'>
                    <h1 className='space-x-4 '>Shop All </h1>
                    <h1 className='space-x-6'>---m</h1>
                </div>
                <div className='bg-blue-500 w-12 '></div>
        </div>
    
    <div></div>
    
        
   </div>
  )
}

export default Logo