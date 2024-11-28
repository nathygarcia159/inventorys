import React from 'react'

function Card2() {
  return (
    <div className='grid grid-cols-2 py-10'>
        <div className='relative items-center'>
           
            <img src="https://media.istockphoto.com/id/582298358/es/foto/correr-al-aire-libre.jpg?s=2048x2048&w=is&k=20&c=pkYkL9qu0VFVV4xdyyC7ejQkhi2SMDFCf5Yk26tEsN4=" alt="" />
           
            <div className=' absolute bottom-2 right-3 md:bottom-40 md:right-32 text-center flex flex-col justify-center items-center'>
              <h1 className='lg:py-10 text-white text-2xl lg:text-5xl'>STOP.POP.SHIMMY</h1>
              <button className='bg-white  text-red-500 lg:p-4 text-base lg:px-24 lg:text-lg'>SHOP THE CURRY COLLECTION      ------Z </button>
            </div>
        </div>
        <div className='relative items-center'>
           
            <img src="https://media.istockphoto.com/id/582298358/es/foto/correr-al-aire-libre.jpg?s=2048x2048&w=is&k=20&c=pkYkL9qu0VFVV4xdyyC7ejQkhi2SMDFCf5Yk26tEsN4=" alt="" />
           
            <div className=' absolute bottom-2 right-3 md:bottom-40 md:right-32 text-center flex flex-col justify-center items-center'>
              <h1 className='lg:py-10 text-white text-2xl lg:text-5xl'>STOP.POP.SHIMMY</h1>
              <button className='bg-white  text-red-500 lg:p-4 text-base lg:px-24 lg:text-lg'>SHOP THE CURRY COLLECTION      ------Z </button>
            </div>
        </div>
        
        
    </div>
    
  )
}

export default Card2