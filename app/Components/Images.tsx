"use client"

import React from 'react'
import Image from "next/image";
import Assets from "@/app/Assets/image.jpeg";

const temp_arr = [Assets]

const Images = () => {
  return (
    <>
    <div className="flex md:justify-end sm:justify-center">
      {
        temp_arr.map((imgsrc)=>{
          return <Image className="md:w-10/12 md:object-scale-down lg:object-cover" src={imgsrc} alt=""/>
        })
      }
        
    </div>
    </>
  );
}

export default Images