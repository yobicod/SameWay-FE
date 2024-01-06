import axios from 'axios'
interface IGeoLatLon {
  lat: number
  lon: number
}
export async function querySuggestLocation(keywords: string) {
  const result = await axios.get(
    `https://search.longdo.com/mapsearch/json/suggest?keyword=${keywords}&area=10&span=100km&limit=20&key=${process.env.NEXT_LONGDO_MAP}`
  )
  return result
}
export async function queryLocation(keywords: string) {
  const result = await axios.get(
    `https://search.longdo.com/mapsearch/json/search?keyword=${keywords}&area=10&span=100km&key=15f064efea8a51cdfad9503113d16614`
  )
  return result
}
export async function queryLocationByGeoLocation(geoLocation: IGeoLatLon) {
  const lat = geoLocation.lat
  const lon = geoLocation.lon

  const result = await axios.get(
    `https://api.longdo.com/map/services/address?lon=${lon}&lat=${lat}&noelevation=1&key=15f064efea8a51cdfad9503113d16614`
  )
  return result
}
