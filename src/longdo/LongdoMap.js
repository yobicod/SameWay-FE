'use client';
import Button from '@/components/Button';
import Input from '@/components/Input';
import React, { useEffect, useState } from 'react';

export default function Map() {
  let suggest;
  let search;
  let map;

  function initMap() {
    suggest = document.getElementById('suggest');
    search = document.getElementById('search');
    map = new window.longdo.Map({
      placeholder: document.getElementById('map'),
      // setup for mobile style
      ui: longdo.UiComponent.Mobile,
      language: 'th',
      placeholderHtml: '<p>Loading map...</p>',
    });

    // zoom map level
    // map.zoom(17);

    // setup current location
    map.location(longdo.LocationMode.Geolocation);
    const myLatlng = map.location();
    console.log('🚀 ~ file: LongdoMap.js:18 ~ Map ~ myLatlng:', myLatlng);
    const currentLocationMarker = new longdo.Marker(myLatlng);
    setTimeout(() => {
      map.Overlays.drop(currentLocationMarker, {
        title: 'my current location',
        detail: 'hello form my location',
        visibleRange: { min: 7, max: 9 },
        draggable: true,
        weight: longdo.OverlayWeight.Top,
      });
    }, 1500);

    handleMapEvent();
  }

  let selectedLocation;
  let isSelectedDestination = false;
  function handleMapEvent() {
    setInterval(() => {
      map.Event.bind('location', function () {
        selectedLocation = map.location(); // Cross hair location
        console.log(selectedLocation);
      });
    }, 500);
    selectedDestination(isSelectedDestination);
  }

  function selectedDestination(isSelectedDestination) {
    if (!isSelectedDestination) {
      map.Event.bind('click', function () {
        isSelectedDestination = true;
        var mouseLocation = map.location(longdo.LocationMode.Pointer);
        console.log(
          '🚀 ~ file: LongdoMap.js:53 ~ mouseLocation:',
          mouseLocation
        );
        map.Overlays.add(new longdo.Marker(mouseLocation));
      });
    } else {
      return;
    }
  }

  setTimeout(async () => {
    await initMap();
  }, 1500);

  // setTimeout(() => {
  //   // get lat lng from mouse pointer
  //   let mouseLatLng = map.location(longdo.LocationMode.Pointer);
  //   setInterval(() => {
  //     console.log(
  //       '🚀 ~ file: LongdoMap.js:28 ~ setTimeout ~ mouseLatLng:',
  //       mouseLatLng
  //     );
  //   }, 1000);

  //   // Customize the map as needed
  //   map.Search.placeholder(document.getElementById('result'));
  //   map.Search.suggest(search?.value || '');

  //   map.Event.bind('suggest', function (result) {
  //     if (result.meta.keyword != search?.value) return;

  //     suggest.innerHTML = '';
  //     for (var i = 0, item; (item = result.data[i]); ++i) {
  //       longdo.Util.append(suggest, 'a', {
  //         innerHTML: item.d,
  //         href: "javascript:doSuggest('" + item.w + "')",
  //       });
  //     }
  //     suggest.style.display = 'block';
  //   });

  //   const myMarker = new longdo.Marker(myLatlng);
  //   map.Overlays.drop(myMarker, {
  //     title: 'my current location',
  //     detail: 'hello form my location',
  //     visibleRange: { min: 7, max: 9 },
  //     draggable: true,
  //     weight: longdo.OverlayWeight.Top,
  //   });
  //   // // Example: Add a marker
  //   // const marker = new window.longdo.Marker(
  //   //   // { lon: 100.516, lat: 13.736 },
  //   //   myLatlng,
  //   //   {
  //   //     title: 'Marker Title',
  //   //     icon: {
  //   //       url: 'https://example.com/marker-icon.png',
  //   //       // url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8mGs7jPfjqd2tpTR74CG44I7nENGuok9aEl8Y_plNeQ&s',
  //   //       offset: { x: 12, y: 45 },
  //   //     },
  //   //   }
  //   // );

  //   // map.Overlays.add(marker);
  //   // map.Search.placeholder(search)
  // }, 4000);

  function querySearch() {
    map.Search.search(search.value);
  }

  function doSuggest(value) {
    search.value = value;
    querySearch();
  }

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
  );
}
