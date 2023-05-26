import React from 'react';
import {Arg, NewArg, SelectCat} from './components/index';
import './App.css';

const App = () => {
  return (
    <div>
      <Arg/>
      <NewArg/>
      <SelectCat/>
      <div className='res'>
        result
      </div>
    </div>
  )
}

export default App
