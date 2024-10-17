"use client"

import React from 'react'
import Image from "next/image";
import Assets from "@/app/Assets/image.jpeg";

const temp_arr = [Assets]

const Images = () => {
  return (
    <>
    <div className="flex basis-1/3 justify-end">
      {
        temp_arr.map((chh)=>{
          return <Image className=" w-10/12 h-auto" src={chh} alt=""/>
        })
      }
        
    </div>
    </>
  );
}

export default Images