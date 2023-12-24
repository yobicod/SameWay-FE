import React, { useEffect } from 'react'

const Map = () => {
  useEffect(() => {
    // Load Longdo Map script dynamically
    const script = document.createElement('script')
    script.src = 'https://api.longdo.com/map/?key=YOUR_API_KEY'
    script.async = true

    // Callback function to execute after the script has loaded
    script.onload = () => {
      if (window.longdo) {
        const map = new window.longdo.Map({
          placeholder: document.getElementById('map'),
          language: 'th',
          placeholderHtml: '<p>Loading map...</p>',
        })

        // Customize the map as needed

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

        map.Event.bind('click', function (location) {
          console.log('Clicked at:', location.lon, location.lat)
        })
      } else {
        console.error('Longdo Map library is not available.')
      }
    }

    // Append the script to the document
    document.head.appendChild(script)

    // Cleanup: Remove the script when the component unmounts
    return () => {
      document.head.removeChild(script)
    }
  }, []) // Run only once on component mount

  return <div id='map' style={{ width: '100%', height: '400px' }} />
}

export default Map
