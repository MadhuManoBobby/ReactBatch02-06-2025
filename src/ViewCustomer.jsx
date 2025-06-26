import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCustomer } from './Slices/Slice';


export const ViewCustomer = (props) => {
    // const {customer} = props
    const customer = useSelector(state => state.customers)
    const dispatch = useDispatch();

    const removeCustomer = (index) => {
      dispatch(deleteCustomer(index))
    }
  return (
    <div className='list'>
        <h2>Customers List</h2>
        <ul style={{listStyleType:'none'}}>
            {customer.map((customer,index) => <li key={customer}>{customer} <button onClick={() => removeCustomer(index)}>Delete</button></li>)}
        </ul>
    </div>
  )
}
