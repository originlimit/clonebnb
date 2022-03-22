import React, { useState } from 'react'
import './DatePicker.css'
import { Button } from '@mui/material'
import SearchDate from './SearchDate.js'

const DatePicker = () => {

  const [showPicker, setShowPicker] = useState(false);

  return (
      <div className='datepicker'>
          {showPicker && <SearchDate />}
          <Button onClick={() => setShowPicker(!showPicker)}>PICK DATE</Button>
      </div>
  )
}

export default DatePicker