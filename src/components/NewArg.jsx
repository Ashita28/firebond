import React, { useState } from 'react';

const NewArg = () => {

  const [showInput, setShowInput] = useState(false);

  const handleClick = () => {
    setShowInput(true);
  };

  return (
    <div>
      {showInput ? (
        <div className=' flex flex-col'>
          <div className='flex flex-row'>
            <div>
              <input type="text" />
            </div>
            <div>
              <select>
                <option value="option1">false</option>
                <option value="option2">true</option>
              </select>
            </div>
            <div>
              <button onClick={handleClick}>+ new arg</button>
            </div>
          </div>
        </div>


      ) : (
        <button onClick={handleClick}>+ new arg</button>
      )}
    </div>
  )
}

export default NewArg
