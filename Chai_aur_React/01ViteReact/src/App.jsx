import Chai from './chai'

// bundler/transpiler converts/parase this JSX code to tree format which we have written in custom react
function App() {
  const snack = "aur Pakode"

  return (
    <>
    {/* evaluated expression - evaluated Js, cannot write if,for loop */}
    <Chai/> <span>{snack}</span> 
    </>
  )
}

export default App
