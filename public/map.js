/* eslint-disable */
var listImg = document.getElementById('listImg');
var mapImg = document.getElementById('mapImg');
var mapDiv = document.getElementById('mapid');
var listResults = document.getElementById('listResults');

var ll = resultsArr[resultsArr.length-1];
var mymap = L.map('mapid').setView(ll, 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 14,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibHVjeW1rIiwiYSI6ImNqY2hxOXp0ODJiOW8yeHBnMmxtMjZuNnAifQ.tsRJmfxB-VdGws5WHp0yhQ'
}).addTo(mymap);

resultsArr.forEach(function(place, i){
    if(place.lat_long) {
        var latlong = place.lat_long.slice(1, -1);
        var llArr = latlong.split(",");
        llArr[0] = (llArr[0] * 1);
        llArr[1] = (llArr[1] * 1);
        console.log(llArr);
        var marker = L.marker(llArr).addTo(mymap);
        marker.bindPopup(place.name + ", " + place.address)
    }
})

listImg.addEventListener("click", function(e){
    e.preventDefault();
    mapImg.style.display = "block";
    listImg.style.display = "none";
    mapDiv.style.display = "none";
    listResults.style.display = "block";
})

mapImg.addEventListener("click", function(e){
    e.preventDefault();
    mapImg.style.display = "none";
    listResults.style.display = "none";
    listImg.style.display = "block";
    mapDiv.style.display = "block";
    mymap.invalidateSize();
})
