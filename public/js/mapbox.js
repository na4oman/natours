/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYXRhbmFzLWlyaWtldiIsImEiOiJjazh5a3A0MjkwMmFuM3RvMjB1OHhsZTR6In0.7PvI1gZCbW67z0fgD3BHPQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/atanas-irikev/ck8ylchms1vmi1io732audw8v'
    //   scrollZoom: false,
    //   zoom: 5,
    //   center: [-118.076252, 34.116483]
    //   interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add Popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    pading: {
      top: 200,
      bottom: 150,
      left: 200,
      fight: 200
    }
  });
};
