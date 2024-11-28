import { MoveRight } from 'lucide-react'
import React from 'react'

const Cards4 = () => {
  return (
    <>
        <div className='lg:text-3xl text-base p-4 bg-purple-200 py-4'>
            <h1>UA Newsroom</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 
      justify-between bg-purple-200 p-4 '>
            <div className='flex flex-col text-base bg-white items-center w-44 '>
                
                <img src="https://sevilla.abc.es/estilo/bulevarsur//wp-content/uploads/sites/14/2021/05/rocio-crusset-deportivas.jpg" alt=""
                className='w-40 h-40' />
                <div className='p-2'>
                <span>Currry Brands ROONe </span>
                <span>FOX Of Brands ROONe </span>
                <span>Campaing</span>
                </div>
                <div className='flex justify-end'><MoveRight /></div>
               
            </div>
            <div className='flex flex-col text-base bg-white items-center w-44'>
                <img src="https://media.vogue.mx/photos/62f682ed3608d67eb4fdcc5c/1:1/w_775%2Cc_limit/scarpe%2520estive%2520donna%2520Copenhagen%2520SS%252020%2520day%25203%2520by%2520STYLED.jpeg" alt=""
                className='w-40 h-40' />
                <span>Currry Brands ROONe </span>
                <span>FOX OFF Brands ROONe </span>
                <span>Campaing</span>
               
            </div>
            <div className='flex flex-col text-base bg-white items-center w-44'>
                <img src="https://sevilla.abc.es/estilo/bulevarsur//wp-content/uploads/sites/14/2021/05/rocio-crusset-deportivas.jpg" alt=""
                className='w-40 h-40' />
                <span>Currry Brands ROONe </span>
                <span>FOX OFF Brands ROONe </span>
                <span>Campaing</span>
               
            </div>
            <div className='flex flex-col text-base bg-white items-center w-44'>
                <img src="https://sevilla.abc.es/estilo/bulevarsur//wp-content/uploads/sites/14/2021/05/rocio-crusset-deportivas.jpg" alt=""
                className='w-40 h-40' />
                <span>Currry Brands ROONe </span>
                <span>FOX OFF Brands ROONe </span>
                <span>Campaing</span>
               
            </div>
            <div className='flex flex-col text-base bg-white items-center w-44'>
                <img src="https://sevilla.abc.es/estilo/bulevarsur//wp-content/uploads/sites/14/2021/05/rocio-crusset-deportivas.jpg" alt=""
                className='w-40 h-40' />
                <span>Currry Brands ROONe </span>
                <span>FOX OFF Brands ROONe </span>
                <span>Campaing</span>
               
            </div>


        </div>
         <div className=' flex justify-center bg-purple-200 py-4 px-4'>
            <button className=' w-52 h-10 rounded-md border-black bg-gray-950    text-white'>View All</button>
         </div>
   
    </>
  )
}

export default Cards4