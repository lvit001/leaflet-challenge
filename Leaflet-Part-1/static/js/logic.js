// create the map
let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 3
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  

// Use the link below to retrieve the geoJSON data
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// define a function that will modify the color of the point based on depth
// deeper depth = darker color
function markerColor(coordinate) {   
    if (coordinate > 90) {
        return "darkred";
    }
    else if (coordinate > 70) {
        return "red";
    }
    else if (coordinate > 50) {
        return "orangered";
    }
    else if (coordinate > 30) {
        return "orange";
    }
    else if (coordinate > 10) {
        return "yellow";
    }
    else {
        return "green";
    }
}


// define a function that will mopify the size of the point based on magnitude
// greater magnitude = larger size
// added a multiplier to make the circles more visible on the map
function markerSize(magnitude) {
        return magnitude * 3;
} 


// Get the data with d3
d3.json(url).then(data => {
    L.geoJson(data, {
        
        // point to layer and L.circleMarker: https://leafletjs.com/reference.html#geojson
        pointToLayer: function (feature, latlng) {
            console.log(feature)
            return L.circleMarker(latlng);
        },

        // set the style of the map using the predefined markerColor and markerSize functions
        style: function(feature) {
            return {
                color: "white",
                stroke: true,
                fillColor: markerColor(feature.geometry.coordinates[2]),
                fillOpacity: 0.75,
                weight: 1,
                radius: markerSize(feature.properties.mag)
            }

        },
        
        // add popups to each circle on the map including html formatting
        onEachFeature: function(feature, layer) {
            layer.bindPopup(`<h3> Location: ${feature.properties.place}</h3><hr><p> 
            Date: ${new Date(feature.properties.time)}</p><hr><p> Magnitude: ${feature.properties.mag}</p>
            <hr><p> Depth: ${feature.geometry.coordinates[2]}</p>`);
        }

    }).addTo(myMap);
    
    // Add a legend
    // code for legend found here: https://leafletjs.com/examples/choropleth/
    var legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'info legend'),
            depths = [-10, 10, 30, 50, 70, 90];

        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < depths.length; i++) {
            div.innerHTML +=
                '<i style="background:' + markerColor(depths[i] + 1) + '"></i> ' +
                depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(myMap);

})


