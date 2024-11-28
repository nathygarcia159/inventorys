"use client"
import {  useGetProductsQuery } from "@/state/api"
import {Header} from "../(components)/Header"

import { useState } from "react"
import { PlusCircleIcon, SearchIcon } from "lucide-react"




export const ProducShop = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const{data: products, isLoading, isError} =useGetProductsQuery(searchTerm);

 
  
  if (isLoading){
    return <div className="py-4 ">Cargando...</div>
  }
  if (isError|| !products){
    return(  
      <div className="text-center text-red-500 py-4"> 
      Conexion fallida </div>
  )
  }
  return (
    <>
    <div className="mx-auto pb-5 w-full py-10">
      
      <div className="mb-6">
        <div className="flex items-center w-40 h-10 border-2 border-gray-200 rounded-lg">
          <input type="text " className="w-full py-2 px-4 rounded bg-black"
          placeholder="Outlet"
           value={searchTerm}
           onChange={(e)=>setSearchTerm(e.target.value)} />
           <SearchIcon className="w-5  h-5 text-gray-500 m-2" />
        </div>
      </div>
      <div className="flex justify-between items-center mb-6">
        <Header name="Shop Bestsellers"/>
        <div className="flex space-x-5 font-bold text-lg">
          <h1 >Clothing</h1>
          <h1>Shoes</h1>
          <h1>Accesrios</h1>
          </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-10 justify-between">
        {isLoading?(
            <div>   
          Cragando.....
          </div>
        ):(
          products?.map((product)=>(
            <div  key={product.productId} className=" border shadow rounded-md p-4 max-w-full w-full mx-auto">
              <div className="flex flex-col items-center">
                <div className="bg-orange-100  px-9 pt-9">
                <img src="https://media.glamour.es/photos/65d695c6ecae4503ba2740cd/4:3/w_1600%2Cc_limit/1467670428" 
                className=" w-40 h-40"/>
                </div>
                <h3 className="text-3xl text-gray-800 font-semibold"> {product.name}
                </h3>
                <h2 className="text-lg">{product.descripcion}</h2>
                <div className="flex justify-start"> 
                <p className="text-gray-800"> S/.{product.price}</p>
                </div>
              </div>
              <div className="flex flex-row  justify-center items-center  space-x-36  ">
              
                    <div
                     className="w-5 h-5 rounded-full border"
                    style={{ backgroundColor: product.color }}></div>
                
                
                  <PlusCircleIcon className="w-5 h-5 mr-2 !text-gray-200"/>
               
              </div>
            </div>
          ))
        )}
      </div>
      
      
    </div>
    </>
  )
}
export default ProducShop