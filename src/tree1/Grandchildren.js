import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleChangePersonSibling, selectPersonSiblingAtIndex } from '../store/slices/dataSlice'

const index =0
function Grandchildren() {
  const state = useSelector(selectPersonSiblingAtIndex(index))
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(handleChangePersonSibling({ index, key: e.target.name, value: e.target.value }))
  }

  console.count("rendering sibling form from below")

  return (
    <div>
    <h1>Inputs to change person1 sibling from below</h1>
      <input placeholder='name' name="name" onChange={handleChange} value={state.name}/>
      <input placeholder='address' name="address" onChange={handleChange} value={state.address}/>
      <input placeholder='street' name="street" onChange={handleChange} value={state.street}/>
      <input placeholder='phone' name="phone" onChange={handleChange} value={state.phone}/>
    </div>
  )
}

export default Grandchildren