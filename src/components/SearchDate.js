import React from 'react'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range'

const SearchDate = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
  return (
    <>
        this is a test
    </>
  )
}

export default SearchDate