const axios = require('axios');

const API_KEY = '81a9b36b2fc846dbb58154709241811';
const BASE_URL = 'http://api.weatherapi.com/v1';

const getCurrentWeather = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching weather data');
    }
};

const getAstronomyData = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/astronomy.json?key=${API_KEY}&q=${city}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching astronomy data');
    }
};

const getWeatherForecast = async (city, days) => {
    try {
        const response = await axios.get(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching forecast data');
    }
};

module.exports = { getCurrentWeather, getAstronomyData, getWeatherForecast };
