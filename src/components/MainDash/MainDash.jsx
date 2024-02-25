import React from 'react'
import './MainDash.css'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
const MainDash = () => {
  return (
   <div className='Maindash'>
    <h1>Dashbord...</h1>
    <Cards/>    
    <Table/>
   </div>
  )
}

export default MainDash
