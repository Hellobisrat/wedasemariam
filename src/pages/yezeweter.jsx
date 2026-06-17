import React from 'react'
import data from '../data/prayer/yezeweter.json'
import PrayerPage from '../components/PrayerPage'



const yezeweter= () => {
  return (
   <PrayerPage {...data}/>
  )
}

export default yezeweter