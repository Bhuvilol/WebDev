import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}


// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">Click me to visit google</a>
)

const anotherUser = "Chai aur element"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to boom ',

  anotherUser ,


  anotherElement
)

createRoot(document.getElementById('root')).render(
  reactElement
)
