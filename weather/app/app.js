const express = require('express');
const weatherController = require('./controllers/weatherController');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Ёндпоинт дл€ получени€ текущей погоды
app.get('/weather/current', weatherController.getCurrentWeather);

// Ёндпоинт дл€ получени€ астрономической информации
app.get('/weather/astronomy', weatherController.getAstronomyData);

// Ёндпоинт дл€ получени€ прогноза погоды на несколько дней
app.get('/weather/forecast', weatherController.getWeatherForecast);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
