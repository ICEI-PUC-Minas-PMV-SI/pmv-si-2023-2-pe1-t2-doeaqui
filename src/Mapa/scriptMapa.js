var map;
// var cep = localStorage.getItem("cep");

const cep = 33120050;
const variasLocalidadesLatLng =
    [
        {
            lat: -19.7741,
            lng: -41.92546
        },
        {
            lat: -19.7926,
            lng: -41.92745
        },
        {
            lat: -19.7926,
            lng: -43.85214
        },
        {
            lat: -19.7926,
            lng: -41.12336
        },
        {
            lat: -18.7926,
            lng: -42.85423
        },
        {
            lat: -19.7926,
            lng: -45.1234
        },
    ];


// fetch(`https://nominatim.openstreetmap.org/search?format=json&postalcode=${cep}`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         const lat = data[0].lat;
//         const lng = data[0].lon;
//         console.log(lat, lng);
//         if (map === undefined) {
//             map = L.map('mapid').setView([lat, lng], 14);
//         } else {
//             map.remove();
//             map = L.map('mapid').setView([lat, lng], 13);
//         }
//     });


function success(pos) {
    console.log(pos.coords.lat, pos.coords.log);
    // h2.textContent = `Latitude:${pos.coords.latitude}, Longitude:${pos.coords.longitude}`;

    if (map === undefined) {
        map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 14);
    } else {
        map.remove();
        map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 13);
    }

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
        .bindPopup('Eu estou aqui!')
        .openPopup();

    // L.marker([-19.7926, -43.92546]).addTo(map)
    //     .openPopup();

    //pegar as variasLocalidadesLatLng e colocar no mapa
    for (let i = 0; i < variasLocalidadesLatLng.length; i++) {
        L.marker([variasLocalidadesLatLng[i].lat, variasLocalidadesLatLng[i].lng]).addTo(map)
            .bindPopup('Eu estou aqui!')
            .openPopup();
    }

}
// //calcular a distancia de uma cordenada para outra
// function calcDistancia(distancia) {
//     var R = 6371; // Radius of the earth in km
//     var dLat = deg2rad(distancia.lat2 - distancia.lat1);  // deg2rad below
//     var dLon = deg2rad(distancia.lon2 - distancia.lon1);
//     var a =
//         Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//         Math.cos(deg2rad(distancia.lat1)) * Math.cos(deg2rad(distancia.lat2)) *
//         Math.sin(dLon / 2) * Math.sin(dLon / 2)
//         ;
//     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     distancia.d = R * c; // Distance in km
//     return distancia.d;
// }

// function deg2rad(deg) {
//     return deg * (Math.PI / 180)
// }

// console.log(calcDistancia({
//     lat1: -19.7926,
//     lon1: -43.92546,
//     lat2: -19.78228,
//     lon2: -43.91685,

// }));

function error(err) {
    console.log(err);
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 50000,
});

