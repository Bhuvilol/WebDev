import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-8 text-center'>Bhabesh Behera</h1>
     <div className="flex justify-center gap-6">
       <Card username="Bhabesh" btnname="Sign In"/>
       <Card username="Bhuvi" btnname="Sign Up"/>
     </div>
    </>
  )
}

export default App
