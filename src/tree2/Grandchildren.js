import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleChangePayee, selectPayee } from '../store/slices/dataSlice'

function Grandchildren() {
  const dispatch = useDispatch()
  const state = useSelector(selectPayee)

  const handleChange = (e) => {
    dispatch(handleChangePayee({ key: e.target.name, value: e.target.value }))
  }
  
  return (
    <div>
      <h1>Inputs to change payee</h1>
      <input placeholder='name' name="name" onChange={handleChange} value={state.name}/>
      <input placeholder='address' name="address" onChange={handleChange} value={state.address}/>
      <input placeholder='street' name="street" onChange={handleChange} value={state.street}/>
      <input placeholder='phone' name="phone" onChange={handleChange} value={state.phone}/>
    </div>
  )
}

export default Grandchildren