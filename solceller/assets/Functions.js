export function getSunHours() {
    let stationId = getStationId("Lund"); // TODO hard coded the station name!
    fetch('https://opendata-download-metobs.smhi.se/api/version/latest/parameter/10/station/'+ stationId+'/period/latest-months/data.json', {
        method: 'get'
    }).then(function(response) { return response.json(); })
        .then(function(data) {

        let sunArray = [];
        let dayHours = 24;
        let nr_days = 10;
        let counter = 0;

        // Calculate seconds of sun for nr of days saved in sunArray
        for(let j = 0; j < nr_days; j++) {
            let sunHours = 0;
            for (let i = 0; i < dayHours; i++) {
                sunHours += parseInt(data.value[counter + i].value);
                counter++;
            }
            sunArray[j] = sunHours/(60*60);
        }
    }).catch(function(err) {
        console.log("Error: " + err);
    });
}

export function convertDate(epoch_date){
    let date = new Date(epoch_date);
    console.log(date.toLocaleString('en-GB'));
    return date;
}

export function getStationId(input) {
    let stationID = "";
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