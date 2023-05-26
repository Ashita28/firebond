import React from 'react';

const SelectCat = () => {

  return (
    <div className='selcat'>
      <div className="dropdown">
    <select>
  <option value="" disabled selected>select</option>
  <option value="option1">constant</option>
  <option value="option2" label='My arg'>argument</option>
  <option value="option3">add</option>
  <option value="option3">or</option>
</select>
<button>x</button>
  </div>
  </div>
  )
}

export default SelectCat
