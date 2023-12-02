import React from "react";
import "./TwoBoxes.css";

function TwoBoxes() {
  return (
    <div className="flex  bg-white bg-opacity-10 containerII min-h-34  ">
       
      <div className="w-1/4 p-4 ml-4 mr-4 border-4 rounded-md">
      
        <div className="text-purple-200 text-opacity-2 bg-white bg-opacity-10 h-32">
          <h3 className='mb-8 pl-4'  > Number of Gift lists </h3>
          <h2 className ='pl-4' >
            <small>#</small> 1
          </h2>
        </div>

      </div>
      <div className="w-1/4 p-4 mr-4 ml-4  border-4 rounded-md" >
        <div className="text-purple-200 text-opacity-2 bg-white bg-opacity-10 h-32 ">
         <h3 className='mb-8 pl-4'>Percentage of items Gifted </h3> 
          <div className="number">
            <h2 className='pl-4'>
              <small>#</small> 25%
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoBoxes;
