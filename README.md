# Module 15 Challenge: Leaflet Earthquake Map
![image](https://github.com/lvit001/leaflet-challenge/assets/140283164/29223a92-e632-4989-b3a4-bd07bcd33740)
## Assignment Goals:
1. Choose a data set from the provided [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)
2. Load the JSON file into the js file using d3.Json and then
3. Create a circle map with the JSON file data. The size of the circle will depend on the magnitude of the earthquake and the color will depend on the depth.
4. Add popups that display each earthquake's location, magnitude, and depth.
5. Add a legend to the map to clarify the color meanings
## Assignment Deliverables
1. Chose the past 7 weeks of all earthquake data using the link below
     - ![image](https://github.com/lvit001/leaflet-challenge/assets/140283164/b872ba07-718c-450c-a8fd-d8dfbc24658e)
2. Loaded the JSON data using d3.Json() and then()
     - ![image](https://github.com/lvit001/leaflet-challenge/assets/140283164/96f7ddd8-fb61-4a9d-808b-94b0db378865)
3. Set up the map and tilelayer
     - ![image](https://github.com/lvit001/leaflet-challenge/assets/140283164/d6bb0d63-0c94-4433-b687-e5eb2292fa79)
4. Created functions to adjust the size and color of the circles
     - ![image](https://github.com/lvit001/leaflet-challenge/assets/140283164/fb7dfda9-5be0-4268-8b97-c11c9fb03b61)
5. Added these functions into an L.geoJson function to add the circles to the map
     - ![image](https://github.com/lvit001/leaflet-challenge/assets/140283164/b5ed04ec-56f0-40fe-b5c8-f30f9251eb1e)
6. Added the popups to each data point, which included location, date, magnitude, and depth
     - ![image](https://github.com/lvit001/leaflet-challenge/assets/140283164/6f4c19d2-eb60-47fd-9a34-f9a947515ac7)
7. Added a legend that would show the relationship between color and depth
     - ![image](https://github.com/lvit001/leaflet-challenge/assets/140283164/4826f549-ce26-4f0e-89bf-60afd8081f17)
8. The Final Result is the map at the beginning of this readme file.
## Resources
1. Used the [leaflet geoJson guide](https://leafletjs.com/reference.html#geojson) for help with changing the datapoint type to circle markers
2. Used the [leaflet choropleth guide](https://leafletjs.com/examples/choropleth/) for help setting up the legend
3. Got based legend code for the CSS file from the [leaflet choropleth guide](https://leafletjs.com/examples/choropleth/)
4. Had help changing the background color of the legend and adding padding from this [link](https://codepen.io/haakseth/pen/KQbjdO)






