var boundary = [-81.3899688720703, -18.4412956237793, -68.5886001586914, 0.0298568718135357];

var map = L.map('map', {
    center: [(boundary[1] + boundary[3]) / 2, (boundary[0] + boundary[2]) / 2],
    zoom: 5
});

var defaultBase = L.tileLayer.provider('CartoDB.DarkMatter').addTo(map);

var baseLayers = {
    'Dark Matter': defaultBase,
    'OpenStreetMap': L.tileLayer.provider('OpenStreetMap'),
    'OpenTopoMap': L.tileLayer.provider('OpenTopoMap'),
    'EsriWorldPhysical': L.tileLayer.provider('Esri.WorldPhysical'),
    'EsriWorldImagery': L.tileLayer.provider('Esri.WorldImagery')
};

var geojsonMarkerOptions = {
    radius: 5,
    fillColor: "#4444f5a3",
    color: "#3388ff",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

// var anotherLayer = L.geoJSON(data, geojsonMarkerOptions).addTo(map);
L.geoJson(data, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);
  
    

var groupOverLays = {
    "Límites departamentales del Perú": {
        "another": anotherLayer
    }
};

L.control.groupedLayers(baseLayers, groupOverLays).addTo(map);
L.control.scale({position: 'bottomleft'}).addTo(map);

map.pm.addControls(options);