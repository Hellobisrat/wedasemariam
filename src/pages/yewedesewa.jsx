import React from 'react'
import data from '../data/prayer/yewedesewa.json'
import PrayerPage from '../components/PrayerPage'



const yewedesewa = () => {
  return (
   <PrayerPage {...data}/>
  )
}

export default yewedesewa