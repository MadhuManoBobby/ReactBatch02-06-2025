import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddCustomer } from './AddCustomer'
import { Provider } from 'react-redux'
import { Store } from './Store'
import { ViewCustomer } from './ViewCustomer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Provider store={Store}>
      <h2>Add Customer</h2>
      <AddCustomer/>
      <ViewCustomer/>
      </Provider>
    </div>
  )
}

export default App
