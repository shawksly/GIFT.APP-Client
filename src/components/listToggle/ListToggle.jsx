import React, {useState} from 'react'
import './ListToggle.css'

function ListToggle() {

    const [isChecked, setIsChecked] = useState(false);


    const handleCheckboxChange = () => {
 
      setIsChecked(!isChecked);
    };
  

    const boxStyle = {
      backgroundColor: isChecked ? 'white' : 'black',
      color: isChecked ? 'black' : 'white',
    };
  
    const ballStyle = {
      transform: isChecked ? 'translate-x-full' : 'translate-x-0',
      position: isChecked ?  'absolute' : 'relative',
      right: isChecked ? '0': '',
    backgroundColor: isChecked ? 'red': 'green'

      
    };
  
    const bodyStyle = {
      backgroundColor: isChecked ? 'black' : 'white',
      color: isChecked ? 'white' : 'black',
    };
  
  
  


  return (
    <div>
    <div className="container mx-auto">
      <div className="title text-center mt-8">
        <h1 className="text-3xl font-semibold"> .List <br /> Toggler</h1>
      </div>
    
      <div className="btn mt-8 flex items-center justify-center">
        <input
          type="checkbox"
          name="check"
          id="check"
          className="hidden"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="check" className="cursor-pointer">
        <div className="box relative w-64 h-14 bg-gray-300 rounded-full p-1 transform scale-150" style={boxStyle}>
  <div className="ball absolute w-12 h-12 bg-white rounded-full shadow-md" style={ballStyle}></div>
  {isChecked ? (
    <div className="scenery flex items-center">
      <div className="sun relative">
        <h5 className="absolute top-1/4 left-4 transform translate-y-1/2 translate-x-1/2 m-0"> Friends.Lists </h5>
      </div>
    </div>
  ) : (
    <div className="my">
      <h5 className="absolute top-1/3 left-4 transform translate-y-1/2 translate-x-1/2 m-0 ml-4 mt-1 "> My.Lists </h5>
    </div>
  )}
</div>






  
</label>
      </div>
      
    </div>
  </div>
  )
}

export default ListToggle