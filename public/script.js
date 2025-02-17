let map;
let markers = [];
let userMarker = null;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 43.2557, lng: -79.8711 },
        zoom: 12
    });

    fetchMarkers();
}

function fetchMarkers() {
    fetch("markers.json")
        .then(response => response.json())
        .then(data => {
            console.log("Markers Data:", data); 
            data.forEach(place => {
                addMarker(place);
            });
        })
        .catch(error => console.error("Error fetching markers:", error));
}


function addMarker(place) {
    let marker = new google.maps.Marker({
        position: { lat: place.lat, lng: place.lng },
        map: map,
        title: place.name
    });

    let infoWindow = new google.maps.InfoWindow({
        content: `
        <h5>${place.name}</h5>
        <p>Category: ${place.type}</p>
        <a href="https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}" target="_blank">
                Get Directions
            </a>
        `
    });

    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });

    marker.category = place.type;
    markers.push(marker);
}

function filterMarkers(type) {
    markers.forEach(marker => {
        marker.setMap(type === "all" || marker.category === type ? map : null);
    });
}

function showUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log("user position:", position);
            if (userMarker) userMarker.setMap(null);

            userMarker = new google.maps.Marker({
                position: { lat: position.coords.latitude, lng: position.coords.longitude },
                map: map,
                icon: {
                    url: "images/gps.png", 
                    scaledSize: new google.maps.Size(40, 40), 
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(20, 20) 
                }
                
            });

            map.setCenter(userMarker.getPosition());
        }, error => {
            console.error("geolocation error:", error);
        });
    }
}

function addNewMarker() {
    let address = document.getElementById("location").value;
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;

    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: address }, function(results, status) {
        if (status === "OK") {
            let newMarker = {
                name, 
                type: category, 
                lat: results[0].geometry.location.lat(), 
                lng: results[0].geometry.location.lng()
            };

            addMarker(newMarker);
            // add to fix my bugs
            fetch("http://localhost:3000/addMarker", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newMarker)
            })
            .then(response => response.json())
            .then(data => console.log(" Marker saved:", data))
            .catch(error => console.error(" Error saving marker:", error));
        } else {
            alert("Geocode was not successful: " + status);
        }
    });
}


function fetchMarkers() {
    fetch("http://localhost:3000/markers")
        .then(response => response.json())
        .then(data => {
            data.forEach(place => {
                addMarker(place);
            });
        })
        .catch(error => console.error("Error fetching markers:", error));
}

