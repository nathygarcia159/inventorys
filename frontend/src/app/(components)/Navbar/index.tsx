'use client'
import { setIsDarkMode , setIsSidebarCollapsed} from '@/state'
import {  LayoutDashboard, Menu, Moon, Sun } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/app/redux'
import Image from 'next/image'
import ShoppingBag from './ShoppingBag'

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCoolapsed
  )
  const isDarkMode = useAppSelector((state)=>state.global.isDarkMode)

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };
  const toggleDarkMode = ()=>{
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className='flex flex-row justify-between  w-full mb-7 '>
        <div className="flex flex-row justify-between items-center gap-5">
        <button className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={toggleSidebar}>
           <Menu className='w-4 h-4'/>
        </button>
      </div>



      <Link href="/products">
       <Image width={50} height={40} src="data:image/png;base64,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" alt="" 
       className=''/>
        </Link>

       <div className='flex  justify-between md:space-x-16 space-x-7 font-bold lg:text-2xl hover:cursor-pointer'>
       <Link href="/dashboard">
       <h1 className=''>New & Featured</h1>
        </Link>
          <h1 className=''>Men</h1>
          <h1 className=''>Women</h1>
          <h1 className=''>Kids</h1>
          <h1 className=''>Shoes</h1>
          <h1 className=''>Back to shool</h1>
        </div>
        <div className='hidden md:flex justify-between items-center gap-5 bg-black space-x-12'>
          <div className=''>
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (<Sun className='cursor-pointer text-gray-500'
              size={24}/>):<Moon className='cursor-pointer text-gray-500'
              size={24}/>            
            }             
            </button>
          </div>     
            <ShoppingBag/> 
               
        </div>
        <Link href="/productFormulario">
          <LayoutDashboard className='cursor-pointer text-gray-500' size={24}/>Admin
        </Link>
      </div>
   
  )
}
