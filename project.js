// Function to search for station details
async function searchStation() {
    const stationName = document.getElementById('stationName').value;
    const stationResult = document.getElementById('stationResult');
    
    try {
        const response = await fetch(`https://rapidapi.com/IRCTCAPI/api/irctc1/stations?name=${stationName}`, {
            headers: {
                "X-RapidAPI-Key": "https://rapidapi.com/IRCTCAPI/api/irctc1",  // Add your API Key here
                "X-RapidAPI-Host": "IRCTCAPI.p.rapidapi.com"
            }
        });
        const data = await response.json();
        stationResult.innerHTML = `<p>Station Code: ${data.code} | Station Name: ${data.name}</p>`;
    } catch (error) {
        stationResult.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Function to search for train details
async function searchTrain() {
    const trainNumber = document.getElementById('trainNumber').value;
    const trainResult = document.getElementById('trainResult');
    
    try {
        const response = await fetch(`https://rapidapi.com/IRCTCAPI/api/irctc1/train?number=${trainNumber}`, {
            headers: {
                "X-RapidAPI-Key": "https://rapidapi.com/IRCTCAPI/api/irctc1",  // Add your API Key here
                "X-RapidAPI-Host": "IRCTCAPI.p.rapidapi.com"
            }
        });
        const data = await response.json();
        trainResult.innerHTML = `<p>Train Name: ${data.name} | Departure: ${data.departure} | Arrival: ${data.arrival}</p>`;
    } catch (error) {
        trainResult.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Function to get trains between two stations
async function trainsBetweenStations() {
    const sourceStation = document.getElementById('sourceStation').value;
    const destinationStation = document.getElementById('destinationStation').value;
    const trainsBetweenResult = document.getElementById('trainsBetweenResult');
    
    try {
        const response = await fetch(`https://rapidapi.com/IRCTCAPI/api/irctc1/trains-between?source=${sourceStation}&destination=${destinationStation}`, {
            headers: {
                "X-RapidAPI-Key": "https://rapidapi.com/IRCTCAPI/api/irctc1",  // Add your API Key here
                "X-RapidAPI-Host": "IRCTCAPI.p.rapidapi.com"
            }
        });
        const data = await response.json();
        trainsBetweenResult.innerHTML = data.trains.map(train => 
            `<p>Train: ${train.name} | Departure: ${train.departure} | Arrival: ${train.arrival}</p>`
        ).join('');
    } catch (error) {
        trainsBetweenResult.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Function to check PNR status
async function getPnrStatus() {
    const pnrNumber = document.getElementById('pnrNumber').value;
    const pnrResult = document.getElementById('pnrResult');
    
    try {
        const response = await fetch(`https://rapidapi.com/IRCTCAPI/api/irctc1/pnr-status?pnr=${pnrNumber}`, {
            headers: {
                "X-RapidAPI-Key": "https://rapidapi.com/IRCTCAPI/api/irctc1",  // Add your API Key here
                "X-RapidAPI-Host": "IRCTCAPI.p.rapidapi.com"
            }
        });
        const data = await response.json();
        pnrResult.innerHTML = `<p>Status: ${data.status} | Booking Status: ${data.bookingStatus}</p>`;
    } catch (error) {
        pnrResult.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}
