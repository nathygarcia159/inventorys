import { Facebook, Instagram, Twitter, YoutubeIcon } from "lucide-react"



const Foother = () => {
  return (
    <div className='bg-slate-900 text-white flex  flex-col justify-center items-center py-24'>
        <div className='py-3'>
            <h1 className='text-6xl font-medium py-3'>Stay In The Game</h1>
            <h2 className='text-3xl py-6'>Sing up for our latest drops promotions.</h2>
        </div>
        <div className='px-9 space-x-7'>
        <button className='bg-slate-50 text-slate-950 py-4 text-md px-32 '>name@email.com</button>
        <button className='bg-slate-50 text-slate-950 py-4 text-md px-16'>SIGN UP ----z
           </button>
        </div> 

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 px-96 min-w-full  text-lg'>
            <div className=''>
                 <img width={60} height={60} src="https://legendsshopping.com/wp-content/uploads/2022/02/UnderArmour.png" alt=""  className='w-60 h-60 ' />
            </div>
            <div className="px-4 lg:text-lg text-sm  ">
                <h1 className='border-b-2 w-40 border-b-gray-300 lg:py-4 py-2'>Support</h1>
                <ul className=" ">
                    <li className="">Help Center</li>
                    <li>Size Guide</li>
                    <li>Shipping&Delivery</li>
                    <li>Return&Exchanges</li>
                    <li>StoreLocator</li>
                    <li>OrderTracking</li>
                    <li>Sitemap</li>
                    <li>StudentDiscount</li>
                </ul>
            </div>
            <div className="lg:text-lg text-sm ">
                <h1 className='border-b-2 border-b-gray-300 lg:py-4 py-2 px-2 w-80'>Support & Discounts Support</h1>
                <div className="flex space-x-6">
                    <ul>
                        <li>Help Center</li>
                        <li>Size Guide</li>
                        <li>Shipping&Delivery</li>
                        <li>Return&Exchanges</li>
                        <li>StoreLocator</li>
                        <li>OrderTracking</li>
                        <li>Sitemap</li>
                        <li>StudentDiscount</li>
                    </ul>
                  
                </div>
            </div>
            <div className="px-4 lg:text-lg text-sm ">
                <h1 className='border-b-2 border-b-gray-300 lg:py-4 py-2 px-7 w-40'>Support</h1>
                <ul>
                    <li>Help Center</li>
                    <li>Size Guide</li>
                    <li>Shipping&Delivery</li>
                    <li>Return&Exchanges</li>
                    <li>StoreLocator</li>
                    <li>OrderTracking</li>
                    <li>Sitemap</li>
                    <li>StudentDiscount</li>
                </ul>
            </div>
            <div className="px-4 lg:text-lg text-sm ">
                <h1 className='border-b-2 border-b-gray-300 lg:py-4 py-2 w-56'>Promotion & Discounts</h1>
                <ul>
                    <li>Help Center</li>
                    <li>Size Guide</li>
                    <li>Shipping&Delivery</li>
                    <li>Return&Exchanges</li>
                    <li>StoreLocator</li>
                    <li>OrderTracking</li>
                    <li>Sitemap</li>
                    <li>StudentDiscount</li>
                </ul>
            </div>
            <div>
                
                <ul className="space-y-10">
                   <h1><Instagram /> instagram</h1>
                   <h1><Facebook/>facebook</h1> 
                   <h1> <Twitter/> twitter</h1> 
                   <h1><YoutubeIcon /> youtube</h1> 
                   
                </ul>
                
            </div>
        </div>

    </div>
  )
}

export default Foother