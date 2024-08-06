import { useState, useCallback, useEffect, useRef } from 'react'
import './index.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password,setPassword] = useState("")

  //useRef
  const passwordRef = useRef(null) 

  // using memoization/optimization, the pass is stored in cache 
  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(characterAllowed) str+="!@#$%^&*_-+=()[]{}~`"

    for (let i = 1; i <= length; i++) {
        let charIdx=Math.floor(Math.random()*str.length+1)
        pass += str.charAt(charIdx)
    }

    setPassword(pass)

  },[length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select() // ?. for optional selection
    passwordRef.current?.setSelectionRange(0,length) //to select upto length only
    window.navigator.clipboard.writeText(password)
  }, [password])

  var rangeInput = document.getElementById('passwordLength');
  
  const decreaseButton = () => {
    if (rangeInput.value > 1) {
      rangeInput.value--;
      setLength(length-1)
    }
  };
  
  const increaseButton = () => {
    if (rangeInput.value < 50) {
      rangeInput.value++;
      setLength(length+1)
    }
  };

  // passwordGenerator() //Error: Too many re-renders. React limits the number of renders to prevent an infinite loop. 

    //useEffect is a React Hook that lets you synchronize a component with an external system.
    //Performs effects like fetching data, directly updating the DOM, and timers in your components
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed, passwordGenerator, setPassword])

  return (
    <div className='w-full max-w-md mx-auto my-8 shadow-md rounded-lg px-4 py-6 text-orange-500 bg-gray-700'>
      
      <h1 className='text-2xl text-white text-center mt-1 mb-5'>Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type='text' value={password} className='outline-none w-full py-1 px-3' 
        placeholder='password' readOnly ref={passwordRef}/>
        
        <button onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>

          <button onClick={decreaseButton}className="bg-gray-300 text-black text-xl font-bold px-2 py-1 rounded-l">-</button>

          <input id="passwordLength" type="range" min={4} max={50} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>

          <button onClick={increaseButton}className="bg-gray-300 text-black text-xl font-bold px-1 py-1 rounded-r">+</button>

        </div>
        
        <div className='flex items-center gap-x-1'>
          <input 
            type='checkbox'
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}/>
          <label>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
            type='checkbox'
            defaultChecked={characterAllowed}
            id="characterInput"
            onChange={()=>{
              setCharacterAllowed((prev)=>!prev) // to change it from its previous value every time we check-uncheck Characters
            }}/>
          <label>Characters</label>
        </div>
      </div>

    </div>
  )
}

export default App
