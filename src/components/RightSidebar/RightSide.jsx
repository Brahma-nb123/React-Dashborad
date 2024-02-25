import React from 'react'
import './RightSide.css'
import Updates from '../Updates/Updates'

const RightSide = () => {
  return (
    <div className='RightSide'>
      <div>
        <h3>Upadate</h3>
        <Updates/>
      </div>
      <div>
        <h3>
            Customer Review
        </h3>
      </div>
    </div>
  )
}

export default RightSide
