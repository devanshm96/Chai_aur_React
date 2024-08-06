import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const anotherEle = (
//   <a href="https://google.com">Visit this link</a>
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   anotherEle
// )

/* we can also add like App() */
// ReactDOM.createRoot(document.getElementById('root')).render(
//     App()
// )


// const reactElement = {
//   type:'a',
//   props:{
//       href:"https://google.com",
//       target:'_blank'
//   },
//   children:'Click me to visit google'
// }

const tempVar = 'I am a temporary variable'
const reactElement = React.createElement(
  'a',
  {href:'',target:'_blank'},
  'click me to visit google ',
  tempVar
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <App/>
// )