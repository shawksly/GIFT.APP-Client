import React from "react";
import "./TwoBoxes.css";

function TwoBoxes() {
  return (
    <div className="flex bg-white bg-opacity-10 containerII min-h-34">
    <div className="w-full sm:w-1/2 md:w-1/4 p-2 ml-4 mr-4 border-4 rounded-md">
      <div className="text-purple-200 text-opacity-2 bg-white bg-opacity-10 h-32">
        <h3 className='mb-8 pl-4'>Number of Gift lists</h3>
        <h2 className='pl-4'>
          <small>#</small> 1
        </h2>
      </div>
    </div>
  
    <div className="w-full sm:w-1/2 md:w-1/4 p-2 mr-4 ml-4 border-4 rounded-md relative">
      <div className="text-purple-200 text-opacity-2 bg-white bg-opacity-10 h-32">
        <h3 className='mb-8 pl-4'>Number of Friends Lists</h3>
        <div className="number">
          <h2 className='pl-4'>
            <small>#</small> 2
          </h2>
        </div>
  
        <div className="absolute bottom-0 right-0">
          <img src="https://pixsector.com/cache/1e1ce7f9/avec125e60e5a9957f540.png" alt="View Friends.Lists" className="w-12 h-12 object-cover rounded-md transofrm rotate-90"/>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default TwoBoxes;
