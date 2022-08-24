mapboxgl.accessToken = 'pk.eyJ1IjoibmlzYWJtb2hkIiwiYSI6ImNsM2ZreWE4cTA0bG4zZG9kZ2p6YXQ0emUifQ.z5OBlI1c3PITIBntwPB2Kg';

let satelliteView=false;
let style='mapbox://styles/nisabmohd/cl77uzlqq000114pi0dcpie0i'
var Latitude = 28.6139
var Longitude = 77.2090


let btn=document.querySelector('#btn')
btn.addEventListener('click',()=>{
    toggle();
    setUpMap([Longitude,Latitude],12.75)
})
//mapbox://styles/nisabmohd/cl77wpy96000t14s35k0hivfo
const mapDiv = document.getElementById('map');


navigator.geolocation.getCurrentPosition(success, err, { enableHighAccuracy: true })

function success(position) {
    Latitude=position.coords.latitude
    Longitude=position.coords.longitude
    setUpMap([position.coords.longitude, position.coords.latitude], 12.75)
}
console.log(Latitude, Longitude);
function err(e) {
    console.log(e);
    setUpMap([Longitude, Latitude], 11)
}
const setUpMap = (pos, zoom) => {
    const map = new mapboxgl.Map({
        container: 'map',
        style: style,
        center: pos,
        zoom: zoom,
        projection: 'globe'
    });
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );
}

function toggle(){
    if(satelliteView){
        style='mapbox://styles/nisabmohd/cl77uzlqq000114pi0dcpie0i'
        satelliteView=false
    }else{
        style='mapbox://styles/nisabmohd/cl77wpy96000t14s35k0hivfo'
        satelliteView=true
    }
}