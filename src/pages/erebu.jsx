import React from 'react'
import data from "../data/prayer/erebu.json"
import PrayerPage from '../components/PrayerPage'
  
const erebu = () => {
  return (
   <PrayerPage {...data}/>
  )
}

export default erebu