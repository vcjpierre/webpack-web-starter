import styles from './maps/styles';

function initMap(){

    const coords = {                
        lat: -17.783297,
        lng: -63.182142
    }

    let mapa = new google.maps.Map(document.getElementById('mapa'), {
        center: coords,
        zoom: 17,
        styles: styles
    });

    let marker = new google.maps.Marker({
        position: coords,
        map: mapa,
        title: 'Stories'
    })
}


initMap();