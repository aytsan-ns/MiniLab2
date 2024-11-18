const express = require('express');
const weatherController = require('./controllers/weatherController');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// �������� ��� ��������� ������� ������
app.get('/weather/current', weatherController.getCurrentWeather);

// �������� ��� ��������� ��������������� ����������
app.get('/weather/astronomy', weatherController.getAstronomyData);

// �������� ��� ��������� �������� ������ �� ��������� ����
app.get('/weather/forecast', weatherController.getWeatherForecast);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
