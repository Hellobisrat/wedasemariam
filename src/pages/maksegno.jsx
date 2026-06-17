import React from "react"
import data from "../data/prayer/makesegno.json"
import PrayerPage from "../components/PrayerPage"


const Makesegno = () => {
  return (
    <PrayerPage {...data}/>
  )
}

export default Makesegno