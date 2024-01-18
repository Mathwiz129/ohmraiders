var username = 'oakesbr';
var token = '3ED78602-9C40-44BC-91AE-9ADB5B2EB72F';

// URL of the JSON endpoint
var jsonUrl = 'https://ftc-api.firstinspires.org/v2.0/2023/teams';

// Specify the key for extraction (replace 'teams' with your actual key)
var userKey = 'teams';

// Use the fetch function to make a GET request with the username and token in the headers
fetch(jsonUrl, {
    headers: {
        'Authorization': 'Basic ' + btoa(username + ':' + token),
        'Content-Type': 'application/json'
    }
})
    .then(response => {
        // Check if the request was successful (status code 200)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
    })
    .then(data => {
        // Check if the specified key exists in the data
        if (userKey in data) {
            var teams = data[userKey];

            // Loop through the teams and extract team name and location
            teams.forEach(team => {
                var teamName = team.nameFull;
                var location = team.city + ', ' + team.stateProv + ', ' + team.country;

                // Do something with the extracted data (e.g., log to console)
                console.log('Team Name:', teamName);
                console.log('Location:', location);
            });
        }
    })
    .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
    });
