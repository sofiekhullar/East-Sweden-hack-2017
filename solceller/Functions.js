export function getSunHours() {
    let stationId = getStationId("Lund");
    fetch('https://opendata-download-metobs.smhi.se/api/version/latest/parameter/10/station/'+ stationId+'/period/latest-months/data.json', {
        method: 'get'
    }).then(function(response) { return response.json(); })
        .then(function(data) {
        console.log("response OK");
    }).catch(function(err) {
        console.log(err);
    });
}

export function getStationId(input) {
    let stationID = "";
    console.log('Get stationID');
    if(input === 'Lund'){
        stationID = '53445';
    } if(input === 'Norrköping'){
        stationID = '86655';
    } if(input === 'Stockholm'){
        stationID = '98735';
    } if(input === 'Göteborg'){
        stationID = '71415';
    } if(input === 'Kiruna'){
        stationID = '180025';
    }
    return stationID;
}