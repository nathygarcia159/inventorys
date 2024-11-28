import React from 'react'

const Card3 = () => {
  return (
    <div className='grid grid-cols-2 py-10'>
        <div>
            <img src="https://images.pexels.com/photos/6076498/pexels-photo-6076498.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""
             />
        </div>
        <div className='flex flex-col lg:text-4xl px-3 font-semibold'>
            <h1 className='border-b-2 w-96 border-b-gray-300 lg:py-4 py-2'>Baseball</h1>
            <h2 className='border-b-2 w-96 border-b-gray-300 lg:py-4 py-2'> -z Basketball</h2>
            <h1 className='border-b-2 w-96 border-b-gray-300 lg:py-4 py-2'>Football</h1>
            <h2 className='border-b-2 w-96 border-b-gray-300 lg:py-4 py-2'>Running </h2>
            <h1 className='border-b-2 w-96 border-b-gray-300 lg:py-4 py-2'>Soccer</h1>
            <h2 className=' lg:py-4 py-2'>Gol</h2>
        </div>
    </div>
  )
}

export default Card3