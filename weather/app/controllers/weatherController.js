const weatherService = require('../services/weatherService');

// Эндпоинт для получения текущей погоды
const getCurrentWeather = async (req, res) => {
    const { city } = req.query;
    if (!city) {
        return res.status(400).json({ error: 'City name is required' });
    }

    try {
        const data = await weatherService.getCurrentWeather(city);
        res.json({
            city: data.location.name,
            temperature: data.current.temp_c,
            condition: data.current.condition.text,
            humidity: data.current.humidity,
            wind: data.current.wind_kph
        });
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch current weather data' });
    }
};

// Эндпоинт для получения астрономической информации
const getAstronomyData = async (req, res) => {
    const { city } = req.query;
    if (!city) {
        return res.status(400).json({ error: 'City name is required' });
    }

    try {
        const data = await weatherService.getAstronomyData(city);
        res.json({
            city: data.location.name,
            sunrise: data.astronomy.astro.sunrise,
            sunset: data.astronomy.astro.sunset,
            moonrise: data.astronomy.astro.moonrise,
            moonset: data.astronomy.astro.moonset,
            moon_phase: data.astronomy.astro.moon_phase
        });
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch astronomy data' });
    }
};

// Эндпоинт для получения прогноза погоды
const getWeatherForecast = async (req, res) => {
    const { city, days } = req.query;
    if (!city || !days) {
        return res.status(400).json({ error: 'City name and number of days are required' });
    }

    try {
        const data = await weatherService.getWeatherForecast(city, days);
        const forecast = data.forecast.forecastday.map(day => ({
            date: day.date,
            avg_temp: day.day.avgtemp_c,
            condition: day.day.condition.text
        }));
        res.json({
            city: data.location.name,
            forecast
        });
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch forecast data' });
    }
};

module.exports = { getCurrentWeather, getAstronomyData, getWeatherForecast };
