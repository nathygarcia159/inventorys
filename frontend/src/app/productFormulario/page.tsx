'use client'
import { useCreateProductMutation, useGetProductsQuery, } from "@/state/api";
import { DataGrid, GridColDef} from "@mui/x-data-grid";
import { Header } from "../(components)/Header";
import { PlusCircleIcon } from "lucide-react"
import {CreateProductModal} from './CreateProductModal'
import { useState } from "react";

import { Sidebar } from "../(components)/Sidebar";

const columns:GridColDef[]=[ 
    {field:"name", headerName:"Nombre", width:200},
    {field:"descripcion", headerName:"descripcion", width:200},
    {field:"price", headerName:"precio", width:200},
    {field:"color", headerName:"color", width:200},
    ]


    type ProductFormData={
      name:string;
      descripcion:string;
      price: number;
      color:string;
      stockQuantity: number;
      rating: number;
    }
export const ProductLista = () => {

 
  const [isModalOpen, setIsModalOpen]=useState(false);
  const{data: products, isLoading, isError} =useGetProductsQuery();

  const [createProduct]= useCreateProductMutation();
  const handlerCreateProduct = async(productData:ProductFormData)=>{//productData:ProductFormData
      await createProduct(productData)
  };
    if  (isLoading){
        return 
                <div className="py-4">cargando...</div>
    }
    if (isError|| !products){
        <div className="text-center text-red-500 py-4">
            Falla en la conexion 

        </div>
    }

  return (

  <>  
  <Sidebar/>  
  

    <div className="flex flex-col pl-64 py-10">
         <Header name="productos"/>


        <button className="flex items-center w-28  bg-blue-500 hover:blue-700 text-gray-200 font-bold p-2 rounded"
                    onClick={()=>setIsModalOpen(true)}>
            <PlusCircleIcon className="w-5 h-5 mr-2 !text-gray-200"/>Agregar
        </button>
        <DataGrid rows={products}
        columns={columns}
        getRowId={(row)=>row.productId}
        checkboxSelection className="bg-white shadow rounded-lg border-gray-200 mt-5  !text-gray-700"/>      
    </div>
    <CreateProductModal
    isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)} onCreate={handlerCreateProduct}/>
  </>
  )
}

export default ProductLista
