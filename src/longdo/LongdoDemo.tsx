'use client'
import Button from '@/components/Button'
import Input from '@/components/Input'
import React, { useEffect, useState } from 'react'

interface IGeoLatLon {
  lat: number
  lon: number
}

interface IProps {
  value?: IGeoLatLon | IGeoLatLon[] | undefined
  onChange?: () => void
  height?: string
  disabled?: boolean
}

export default function LongdoDemo({
  value,
  onChange,
  height = '500px',
  disabled = false,
}: IProps) {
  const [mounted, setMounted] = useState(false)
  const [longdoMap, setLongdoMap] = useState()
  const [query, setQuery] = useState('')
  const [result, setResult] = useState([])
  const [locations, setLocations] = useState(value || undefined)
  useEffect(() => {
    setMounted(true)
  }, [])
  useEffect(() => {
    if (!longdoMap && mounted) {
      initMap()
    }
  }, [longdoMap, mounted])
  function initMap() {
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
      // set default marker or default route
      if (value?.length === 2) {
        newMap.Route.add(new longdo.Marker(locations[0]))
        newMap.Route.add(new longdo.Marker(locations[1]))
        newMap.Route.search()
      } else if (value) {
        newMap.Overlays.add(new longdo.Marker(locations))
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
    // if (locations.length === 2) {
    //   longdoMap.Route.removeAt(1)
    //   // remove lastest location
    //   const clonedLocation = locations
    //   clonedLocation.splice(1, 1)

    //   onChange(clonedLocation)
    //   setLocations(clonedLocation)
    // } else {
    //   const clonedLocation = [...locations, mouseLocation]
    //   longdoMap.Route.add(marker)
    //   longdoMap.Route.search()

    //   setLocations(clonedLocation)
    //   onChange(clonedLocation)
    // }
    if (longdoMap.Overlays.list().length >= 1) {
      longdoMap.Overlays.clear()
      if (onChange) onChange(undefined)
      setLocations(undefined)
    } else {
      longdoMap.Overlays.add(marker, { draggable: true })
      if (onChange) onChange(mouseLocation)
      setLocations(mouseLocation)
    }
    console.log(longdoMap.Overlays.list())
  }

  return (
    <div className='w-full h-full'>
      <div
        id='map'
        className='h-full'
        onClick={() => !disabled && addRoute()}
      />
      <div id='result' />
      {/* <Input onChange={(e) => setQuery(e.target.value)} />
      <Button onClick={() => querySearch()}>test</Button> */}
    </div>
  )
}
