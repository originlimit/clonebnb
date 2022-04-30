import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './SearchDate.css'
import { DateRangePicker } from 'react-date-range'
import { Button } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People'

const SearchDate = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h4>Number of guests <PeopleIcon /></h4>
            <input min={0} max={11} defaultValue={2} type='number' />
            <Link className='searchLink' to='/search'>
                <Button>Search CloneBNB</Button>
            </Link>

        </div>
    )
}

export default SearchDate