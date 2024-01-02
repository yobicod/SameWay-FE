'use client'
import Button from '@/components/Button'
import Input from '@/components/Input'
import React, { useEffect, useState } from 'react'

export default function LongdoDemo({ value, onChange }) {
  let suggest

  const [mounted, setMounted] = useState(false)
  const [longdoMap, setLongdoMap] = useState()
  const [query, setQuery] = useState('')
  const [result, setResult] = useState([])
  const [locations, setLocations] = useState(value || [])
  useEffect(() => {
    setMounted(true)
  }, [])
  useEffect(() => {
    if (!longdoMap && mounted) {
      initMap()
    }
  }, [longdoMap, mounted])
  function initMap() {
    suggest = document.getElementById('suggest')
    const newMap = new window.longdo.Map({
      placeholder: document.getElementById('map'),
      layer: [longdo.Layers.GRAY, longdo.Layers.TRAFFIC],
      ui: longdo.UiComponent.Mobile,
      lastView: false,
      language: 'th',
      placeholderHtml: '<p>Loading map...</p>',
      zoom: 15,
    })
    newMap.location(longdo.LocationMode.Geolocation)
    setTimeout(() => {
      if (value.length !== 0) {
        newMap.Route.add(new longdo.Marker(locations[0]))
        newMap.Route.add(new longdo.Marker(locations[1]))
        newMap.Route.search()
      }
    }, 1500)
    setLongdoMap(newMap)
  }
  async function querySearch() {
    longdoMap.Search.placeholder(document.getElementById('result'))
    const searchResult = await longdoMap.Search.search(query)
    setResult(searchResult.data)
  }
  function addRoute() {
    let mouseLocation = longdoMap.location(longdo.LocationMode.Pointer)
    const marker = new longdo.Marker(mouseLocation)
    if (locations.length === 2) {
      longdoMap.Route.removeAt(1)
      // remove lastest location
      const clonedLocation = locations
      clonedLocation.splice(1, 1)

      onChange(clonedLocation)
      setLocations(clonedLocation)
    } else {
      const clonedLocation = [...locations, mouseLocation]
      longdoMap.Route.add(marker)
      longdoMap.Route.search()

      setLocations(clonedLocation)
      onChange(clonedLocation)
    }
    // onChange(console.log(locations))
    // longdoMap.Route.placeholder(document.getElementById('result'))
  }

  return (
    <div className='w-full'>
      <div id='map' style={{ height: 500 }} onClick={addRoute} />
      <div id='result' />
      {/* <Input onChange={(e) => setQuery(e.target.value)} />
      <Button onClick={() => querySearch()}>test</Button> */}
    </div>
  )
}
