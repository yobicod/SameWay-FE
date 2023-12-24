'use client'
import Button from '@/components/Button'
import Input from '@/components/Input'
import React, { useEffect, useState } from 'react'

export default function Map() {
  let suggest = document.getElementById('suggest')
  let search = document.getElementById('search')
  const map = new window.longdo.Map({
    placeholder: document.getElementById('map'),
    language: 'th',
    placeholderHtml: '<p>Loading map...</p>',
  })
  function querySearch() {
    map.Search.search(search.value)
  }
  // Customize the map as needed
  map.Search.placeholder(document.getElementById('result'))
  map.Search.suggest(search?.value || '')

  map.Event.bind('suggest', function (result) {
    if (result.meta.keyword != search?.value) return

    suggest.innerHTML = ''
    for (var i = 0, item; (item = result.data[i]); ++i) {
      longdo.Util.append(suggest, 'a', {
        innerHTML: item.d,
        href: "javascript:doSuggest('" + item.w + "')",
      })
    }
    suggest.style.display = 'block'
  })
  function doSuggest(value) {
    search.value = value
    querySearch()
  }
  // Example: Add a marker
  // const marker = new window.longdo.Marker(
  //   { lon: 100.516, lat: 13.736 },
  //   {
  //     title: 'Marker Title',
  //     icon: {
  //       url: 'https://example.com/marker-icon.png',
  //       offset: { x: 12, y: 45 },
  //     },
  //   }
  // )

  // map.Overlays.add(marker)
  // map.Search.placeholder(search)

  return (
    <div className='flex flex-col gap-2'>
      <div id='map' style={{ height: 500 }} />
      <div id='result' />

      <div>
        <Input id='search' />
        <div id='suggest' className='flex flex-col gap-2' />
        <Button onClick={querySearch}>search</Button>
      </div>
    </div>
  )
}
