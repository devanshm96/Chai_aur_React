import Card from './components/Card'
import './App.css'

function App() {
  let myName={
    name:"Dev",
    age:21
  }
  let myArr=[1,2,3]
  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      {/* passing the property */}
      <Card username="devuu" someString="Hello world!" btnText="Click me!" someObj={myName} someArr={myArr}/>
      <Card username="anuu" btnText=""/>
    </>
  )
}

export default App
