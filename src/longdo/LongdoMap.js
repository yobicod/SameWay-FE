'use client'
import Button from '@/components/Button'
import Input from '@/components/Input'
import React, { useEffect, useState } from 'react'

export default function Map({ onChange, value }) {
  let suggest
  let search
  let map
  const [mounted, setMounted] = useState(false)
  const [location, setLocation] = useState([])
  const [isStart, setIsStart] = useState(false)
  // const [map, setMap] = useState({})
  const test = []
  // setTimeout(async () => {
  //   await initMap()
  // }, 4500)

  useEffect(() => {
    setMounted(true)
  }, [])
  useEffect(() => {
    // const existingScript = document.getElementById('long-do')
    // if (!existingScript) {
    //   const script = document.createElement('script')
    //   script.src = `https://api.longdo.com/map3/?key=15f064efea8a51cdfad9503113d16614`
    //   script.id = 'long-do'
    //   document.body.appendChild(script)
    // }
    if (mounted && window && window.longdo) {
      setTimeout(() => {
        initMap()
      }, 1000)
    }
  }, [mounted])
  // useEffect(() => {
  //   if (window && window.longdo) initMap()
  // }, [window.longdo])
  function initMap() {
    setIsStart(true)
    suggest = document.getElementById('suggest')
    search = document.getElementById('search')

    map = new window.longdo.Map({
      placeholder: document.getElementById('map'),
      layer: [longdo.Layers.GRAY, longdo.Layers.TRAFFIC],
      // layer: [longdo.Layers.POI_TRANSPARENT, longdo.Layers.TRAFFIC],
      ui: longdo.UiComponent.Mobile,
      // ui: longdo.UiComponent.None,
      lastView: false,
      language: 'th',
      placeholderHtml: '<p>Loading map...</p>',
      zoom: 15,
    })

    map.location(longdo.LocationMode.Geolocation)
    map.zoomRange({ min: 16, max: 18 })
    map.Ui.DPad.visible(false)
    map.Ui.Scale.visible(false)
    // map.Ui.Crosshair.visible(false);
    const myLatlng = map.location()
    console.log('🚀 ~ file: LongdoMap.js:18 ~ Map ~ myLatlng:', myLatlng)
    // const currentLocationMarker = new longdo.Marker(myLatlng);
    function addDefaultRoute(value) {
      const defaultStart = new longdo.Marker(value[0])
      const defaultEnd = new longdo.Marker(value[1])
      map.Route.add(defaultStart)
      map.Route.add(defaultEnd)
    }
    // setTimeout(() => {
    //   map.Overlays.drop(currentLocationMarker, {
    //     title: 'my current location',
    //     detail: 'hello form my location',
    //     visibleRange: { min: 7, max: 9 },
    //     draggable: true,
    //     weight: longdo.OverlayWeight.Top,
    //   });
    // }, 1500);

    map.Event.bind('location', function () {
      let selectedLocation = map.location() // Cross hair location
      // console.log(selectedLocation);
    })

    map.Event.bind('click', function () {
      let mouseLocation = map.location(longdo.LocationMode.Pointer)
      const marker = new longdo.Marker(mouseLocation)
      if (test.length === 2) {
        // map.Route.add(marker)
        map.Route.removeAt(1)
        test.splice(1, 1)
      } else {
        // map.Overlays.drop(marker)
        map.Route.add(marker)
        test.push(mouseLocation)
      }
      // console.log('🚀 ~ file: LongdoMap.js:50 ~ test:', test)
      // console.log('🚀 ~ file: LongdoMap.js:53 ~ mouseLocation:', mouseLocation)
      onChange(test)
      map.Route.placeholder(document.getElementById('result'))

      // map.Overlays.clear();
    })
  }

  // Customize the map as needed
  // map.Search.placeholder(document.getElementById('result'));

  // map.Event.bind('suggest', function (result) {
  //   if (result.meta.keyword != search?.value) return;

  //   suggest.innerHTML = '';
  //   for (var i = 0, item; (item = result.data[i]); ++i) {
  //     longdo.Util.append(suggest, 'a', {
  //       innerHTML: item.d,
  //       href: "javascript:doSuggest('" + item.w + "')",
  //     });
  //   }
  //   suggest.style.display = 'block';
  // });

  // map.Search.placeholder(search);

  function querySearch() {
    map.Search.search(search.value)
  }

  // function doSuggest(value) {
  //   search.value = value;
  //   querySearch();
  // }

  return (
    <div className='w-full'>
      <div id='map' style={{ height: 500 }} />
      <div id='result' />
      {/* <div>
        <Input id='search' />
        <div id='suggest' className='flex flex-col gap-2' />
        <Button onClick={querySearch}>search</Button>
      </div> */}
    </div>
  )
}
