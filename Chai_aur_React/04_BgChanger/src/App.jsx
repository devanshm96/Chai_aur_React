import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('bg-white')

  const changeBg = (bgColor)=>{
    setBgColor(bgColor)
  }

  return (
    <div className={`${bgColor} w-full h-screen duration-200`}>
      <div className='bg-sky-900 text-sky-900 p-3 rounded-md flex gap-2'>
        <button onClick={()=> changeBg('bg-red-500')} className='bg-red-500'>Red</button>
        <button onClick={()=> changeBg('bg-yellow-500')} className='bg-yellow-500'>Yellow</button>
        <button onClick={()=> changeBg('bg-green-500')} className='bg-green-500'>Green</button>
        <button onClick={()=> changeBg('bg-blue-500')} className='bg-blue-500'>Blue</button>
        <button onClick={()=> changeBg('bg-gray-500')} className='bg-gray-500'>Gray</button>
        <button onClick={()=> changeBg('bg-orange-500')} className='bg-orange-500'>Orange</button>
        <button onClick={()=> changeBg('bg-purple-500')} className='bg-purple-500'>Purple</button>
        <button onClick={()=> changeBg('bg-black')} className='bg-black'>Black</button>
        <button onClick={()=> changeBg('bg-white')} className='bg-white'>White</button>
      </div>
    </div>
  )
}

export default App
