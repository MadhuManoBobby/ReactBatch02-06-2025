import React, { useEffect, useRef, useState } from 'react'
import { ViewCustomer } from './ViewCustomer'
import { addCustomer as addCustomerAction } from './Slices/Slice'
import { useDispatch } from 'react-redux'

export const AddCustomer = () => {
    let [input,setInput] = useState('')
    let [customer,setCustomer] = useState([])
    let focusInput = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        focusInput.current.focus()
    })

   function addCustomer(){
    if(input){
        dispatch(addCustomerAction(input))
        // setCustomer((preState) => [...preState,input])
        // console.log(customer);        
        setInput("")
    }
   }
    
  return (
    <div>
        <input type="text" value={input} ref={focusInput} onChange={e => setInput(e.target.value)}/>
        <button onClick={addCustomer}>Add</button>

        {/* <ViewCustomer customer={customer}/> */}
    </div>
  )
}
