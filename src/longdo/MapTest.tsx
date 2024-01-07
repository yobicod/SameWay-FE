'use client'

import React, { useEffect, useRef, useState } from 'react'

interface IGeoLatLon {
  lat: number
  lon: number
}

interface IProps {
  value?: IGeoLatLon | undefined
  onChange?: () => void
  height?: string
  disabled?: boolean
  callback?: () => void
}
export let longdo
export let map
export default function MapTest({
  value,
  onChange,
  disabled = false,
  callback,
}: IProps) {
  const [mounted, setMounted] = useState(false)
  const mapRef = useRef(null)
  // const [mapCallback, setMapCallback] = useState(() => {
  //   return () => {
  //     longdo = window.longdo
  //     map = new window.longdo.Map({
  //       placeholder: document.getElementById('map'),
  //       layer: [longdo.Layers.GRAY, longdo.Layers.TRAFFIC],
  //       ui: longdo.UiComponent.Mobile,
  //       lastView: false,
  //       language: 'th',
  //       placeholderHtml: '<p>Loading map...</p>',
  //       zoom: 15,
  //     })
  //   }
  // })
  useEffect(() => {
    setMounted(true)
  }, [])
  useEffect(() => {
    if (mounted) {
      mapCallback()
      setTimeout(() => {
        if (value?.lat && value.lon) {
          map.Overlays.add(new longdo.Marker(value))
          map.location(value)
        }
      }, 500)
    }
    if (mounted && callback) {
      callback()
    }
  }, [mounted, callback, value])

  const mapCallback = () => {
    longdo = window.longdo
    map = new window.longdo.Map({
      placeholder: mapRef.current,
      layer: [longdo.Layers.GRAY, longdo.Layers.TRAFFIC],
      ui: longdo.UiComponent.Mobile,
      lastView: false,
      language: 'th',
      placeholderHtml: '<p>Loading map...</p>',
      zoom: 15,
    })
    map.location(longdo.LocationMode.Geolocation)
  }
  function addRoute() {
    let mouseLocation = map.location(longdo.LocationMode.Pointer)
    const marker = new longdo.Marker(mouseLocation)

    if (map.Overlays.list().length >= 1) {
      map.Overlays.clear()
      if (onChange) onChange({})
      // setLocations(undefined)
    } else {
      map.Overlays.add(marker, { draggable: true })
      if (onChange) onChange(mouseLocation)
      // setLocations(mouseLocation)
    }
    console.log(value)
  }
  return (
    <>
      <div
        ref={mapRef}
        id='map'
        className='h-full w-full'
        onClick={() => !disabled && addRoute()}
      />
    </>
  )
}
