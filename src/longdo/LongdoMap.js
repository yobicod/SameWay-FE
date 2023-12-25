'use client';
import Button from '@/components/Button';
import Input from '@/components/Input';
import React, { useEffect, useState } from 'react';

export default function Map() {
  let suggest;
  let search;
  let map;

  const test = [];
  setTimeout(async () => {
    await initMap();
  }, 2500);

  async function initMap() {
    suggest = document.getElementById('suggest');
    search = document.getElementById('search');
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
    });

    map.location(longdo.LocationMode.Geolocation);
    map.zoomRange({ min: 4, max: 15 });
    map.Ui.DPad.visible(false);
    map.Ui.Scale.visible(false);
    map.Ui.Crosshair.visible(false);
    const myLatlng = map.location();
    console.log('🚀 ~ file: LongdoMap.js:18 ~ Map ~ myLatlng:', myLatlng);
    // const currentLocationMarker = new longdo.Marker(myLatlng);

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
      let selectedLocation = map.location(); // Cross hair location
      // console.log(selectedLocation);
    });

    map.Event.bind('click', function () {
      let mouseLocation = map.location(longdo.LocationMode.Pointer);
      test.push(mouseLocation);
      console.log('🚀 ~ file: LongdoMap.js:50 ~ test:', test);
      console.log('🚀 ~ file: LongdoMap.js:53 ~ mouseLocation:', mouseLocation);
      const marker = new longdo.Marker(mouseLocation);
      map.Overlays.drop(marker);

      map.Route.placeholder(document.getElementById('result'));
      map.Route.add(marker);
      // map.Overlays.clear();
    });
  }

  // Customize the map as needed
  // map.Search.placeholder(document.getElementById('result'));
  // map.Search.suggest(search?.value || '');

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
    map.Search.search(search.value);
  }

  // function doSuggest(value) {
  //   search.value = value;
  //   querySearch();
  // }

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
