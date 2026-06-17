
import data from "../data/prayer/hamus.json"
import PrayerPage from '../components/PrayerPage'


const hamus = () => {
  return (
    <PrayerPage {...data}/>
  )
}

export default hamus