//ComC is Component use it in folder component.
import React,{useContext} from 'react'
import {AppState} from '../App';

const ComC = () => {
  const appData = useContext(AppState)
  return (
    <div className='compc'>
    <h1>from comp c</h1>
    <h1>{appData.data}</h1>
    <h1>name: {appData.info.name}</h1>
    <h1>age:{appData.info.age}</h1>
    </div>
  )
}

export default ComC
