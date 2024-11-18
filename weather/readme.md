# Weather Backend Application

This backend application uses the **WeatherAPI** service to provide data about the current weather,
moon phases, and weather forecasts. Follow the steps below to set up and run the project locally.

## Steps to Set Up the Application Locally

1. Install Dependencies. Run the following command to install all required dependencies:
	npm install
2. Start the Server. Run the following command to start the server:
	node app/app.js
3. Test the API. You can test the API using a browser, Postman.

## Application Logic

Base URL: http://localhost:3000
1. GET /weather/current
      Purpose: Returns the current weather for a specified city.
      Query Parameters:
          city: (required) Name of the city to retrieve weather data for.
      Logic:
          1. Accepts the city name as a query parameter.
          2. Sends a request to WeatherAPI's current.json endpoint.
          3. Extracts relevant data such as temperature, weather condition, and wind speed.
          4. Returns this data as a JSON response.
      Example:
      Request: http://localhost:3000/weather/current?city=Moscow
      Response:
{
    "city": "Moscow",
    "temperature": 3.1,
    "condition": "Partly cloudy",
    "humidity": 93,
    "wind": 19.4
}

2. GET /weather/astronomy
      Purpose: Retrieves the moon phase for a specified city and current date.
      Query Parameters:
           city: (required) Name of the city to retrieve moon phase data for.
      Logic:
           1. Accepts the city name as a query parameter.
           2. Sends a request to WeatherAPI's astronomy.json endpoint.
           3. Extracts the moon phase name and date.
           4. Returns this data as a JSON response.
      Example:
           Request: http://localhost:3000/weather/astronomy?city=Moscow
           Response:
{
    "city": "Moscow",
    "sunrise": "08:11 AM",
    "sunset": "04:17 PM",
    "moonrise": "05:22 PM",
    "moonset": "12:09 PM",
    "moon_phase": "Waning Gibbous"
}

3. GET /weather/forecast
      Purpose: Provides a multi-day weather forecast for a specified city.
      Query Parameters:
           city: (required) Name of the city to retrieve forecast data for.
           days: (required) Number of days to include in the forecast (max: 10).
      Logic:
           1. Accepts the city name and the number of days as query parameters.
           2. Sends a request to WeatherAPI's forecast.json endpoint.
           3. Extracts the forecast data for the requested number of days, including temperature, weather condition, and precipitation probability.
           4. Returns this data as a JSON response.
      Example:
           Request: http://localhost:3000/weather/forecast?city=Moscow&days=3
           Response:
{
    "city": "Moscow",
    "forecast": [
        {
            "date": "2024-11-18",
            "avg_temp": 4,
            "condition": "Patchy rain nearby"
        },
        {
            "date": "2024-11-19",
            "avg_temp": 2.8,
            "condition": "Patchy rain nearby"
        },
        {
            "date": "2024-11-20",
            "avg_temp": 2.9,
            "condition": "Patchy rain nearby"
        }
    ]
}