import React from 'react'
import Grandchildren from './Grandchildren'
import { useDispatch, useSelector } from 'react-redux'
import { handleChangePerson, selectPersonAtIndex } from '../store/slices/dataSlice'

const index = 0
function Children() {
  const person1 = useSelector(selectPersonAtIndex(index))
  const person2 = useSelector(selectPersonAtIndex(1))
  const dispatch = useDispatch()

  const handleChangePerson1 = (e) => {
    dispatch(handleChangePerson({ index, key: e.target.name, value: e.target.value }))
  }

  const handleChangeOfPerson2 = (e) => {
    dispatch(handleChangePerson({ index:1, key: e.target.name, value: e.target.value }))
  }

  console.count("rendering person form")

  return (
    <div>
    <div>
    <Grandchildren />
    <h1>Inputs to change person1</h1>
      <input placeholder='name' name="name" onChange={handleChangePerson1} value={person1.name}/>
      <input placeholder='address' name="address" onChange={handleChangePerson1} value={person1.address}/>
      <input placeholder='street' name="street" onChange={handleChangePerson1} value={person1.street}/>
      <input placeholder='phone' name="phone" onChange={handleChangePerson1} value={person1.phone}/>
    </div>
    <div>
    <h1>Inputs to change person2</h1>
      <input placeholder='name' name="name" onChange={handleChangeOfPerson2} value={person2.name}/>
      <input placeholder='address' name="address" onChange={handleChangeOfPerson2} value={person2.address}/>
      <input placeholder='street' name="street" onChange={handleChangeOfPerson2} value={person2.street}/>
      <input placeholder='phone' name="phone" onChange={handleChangeOfPerson2} value={person2.phone}/>
    </div>
    </div>
  )
}

export default Children