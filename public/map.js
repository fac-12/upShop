/* eslint-disable */
var listImg = document.getElementById('listImg');
var mapImg = document.getElementById('mapImg');
var mapDiv = document.getElementById('mapid');
var listResults = document.getElementById('listResults');

// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
//
// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     maxZoom: 14,
//     id: 'mapbox.streets',
//     accessToken: 'pk.eyJ1IjoibHVjeW1rIiwiYSI6ImNqY2hxOXp0ODJiOW8yeHBnMmxtMjZuNnAifQ.tsRJmfxB-VdGws5WHp0yhQ'
// }).addTo(mymap);

console.log(resultsArr);

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
