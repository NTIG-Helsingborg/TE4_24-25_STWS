import React from "react";
import Image from "next/image";
import Assets from "@/app/Assets/image.jpeg";

const Content = async () => {

  return (
    <>
    <div className="m-8 mr-20 ml-64">
      <div className="border-b-4">
        <h1 className="text-5xl">
          Title
        </h1>
      </div>

      <div className="flex flex-row mt-8 relative">



        <div className="basis-2/3 md:">
          <p>
          text about the site lalalallalala alalalalalalal
          lalalala lalalalalwlelwalelalwl lalalallalala alalalalalalal
          lalalala lalalalalwlelwalelalwl lalalallalala alalalalalalal
          lalalala lalalalalwlelwalelalwl lalalallalala alalalalalalal
          lalalala lalalalalwlelwalelalwl lalalallalala alalalalalalal
          lalalala lalalalalwlelwalelalwl aslada
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-16 bg-gray-300 rounded text-center">
        <h6 className=" text-white">
            read
          </h6>
        </div>

        <div className="flex basis-1/3 justify-end">
          <Image className=" w-7/12 h-auto" src={Assets} alt=""/>
        </div>

      </div>



      <div className="bg-gray-300 p-1 mt-8 h-96">
        <p className="text-white">box for text</p>
      </div>
    </div>




    {/*<table className='table'>
        <thead>
          <tr>
            <th>img</th>
            <th>text</th>
          </tr>
        </thead>
        <tbody>
           <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        </table>*/}

    </>
  
  );
};

export default Content;
