document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('lineChart').getContext('2d');

    const weatherBicycleChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Average Number of Bicycles',
                data: [],
                borderColor: 'rgb(220, 235, 222)',
                backgroundColor: 'rgba(5, 250, 13, 0.2)',
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Weather Types'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Average Number of Bicycles'
                    },
                    beginAtZero: true
                }
            }
        }
    });

    async function fetchDataAndUpdateChart(startDate, endDate) {
        try {
            const weatherData = await fetchWeatherData(startDate, endDate);
            const bicycleData = await fetchBicycleData(startDate, endDate);

            const combinedData = combineData(weatherData, bicycleData);
            const { labels, averages } = processData(combinedData);

            weatherBicycleChart.data.labels = labels;
            weatherBicycleChart.data.datasets[0].data = averages;
            weatherBicycleChart.update();
        } catch (error) {
            console.error('Error fetching or processing data:', error);
        }
    }

    async function fetchWeatherData(startDate, endDate) {
        const latitude = '52.52'; // Replace with actual latitude
        const longitude = '13.41'; // Replace with actual longitude

        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&start_date=${startDate}&end_date=${endDate}&hourly=weathercode`);
        const data = await response.json();

        return data.hourly.time.map((time, index) => ({
            date: time.split('T')[0],
            weatherCode: data.hourly.weathercode[index]
        }));
    }

    async function fetchBicycleData(startDate, endDate) {
        const response = await fetch(`https://www.cyclestreets.net/api/v2/traffic?start_date=${startDate}&end_date=${endDate}`);
        const data = await response.json();

        return data.traffic.map(entry => ({
            date: entry.date,
            bicycles: entry.bicycle_count
        }));
    }

    function combineData(weatherData, bicycleData) {
        const combined = [];

        weatherData.forEach(weatherEntry => {
            const bicycleEntry = bicycleData.find(b => b.date === weatherEntry.date);
            if (bicycleEntry) {
                combined.push({
                    date: weatherEntry.date,
                    weatherCode: weatherEntry.weatherCode,
                    bicycles: bicycleEntry.bicycles
                });
            }
        });

        return combined;
    }

    function processData(data) {
        const weatherCounts = {};
        const bicycleSums = {};

        data.forEach(entry => {
            const weatherType = categorizeWeather(entry.weatherCode);
            if (!weatherCounts[weatherType]) {
                weatherCounts[weatherType] = 0;
                bicycleSums[weatherType] = 0;
            }
            weatherCounts[weatherType]++;
            bicycleSums[weatherType] += entry.bicycles;
        });

        const labels = Object.keys(weatherCounts);
        const averages = labels.map(label => bicycleSums[label] / weatherCounts[label]);

        return { labels, averages };
    }

    function categorizeWeather(weatherCode) {
        const weatherMapping = {
            0: 'Clear',
            1: 'Mainly Clear',
            2: 'Partly Cloudy',
            3: 'Overcast',
            45: 'Fog',
            48: 'Depositing Rime Fog',
            51: 'Light Drizzle',
            53: 'Moderate Drizzle',
            55: 'Dense Drizzle',
            56: 'Light Freezing Drizzle',
            57: 'Dense Freezing Drizzle',
            61: 'Slight Rain',
            63: 'Moderate Rain',
            65: 'Heavy Rain',
            66: 'Light Freezing Rain',
            67: 'Heavy Freezing Rain',
            71: 'Slight Snowfall',
            73: 'Moderate Snowfall',
            75: 'Heavy Snowfall',
            77: 'Snow Grains',
            80: 'Slight Rain Showers',
            81: 'Moderate Rain Showers',
            82: 'Violent Rain Showers',
            85: 'Slight Snow Showers',
            86: 'Heavy Snow Showers',
            95: 'Thunderstorm',
            96: 'Thunderstorm with Slight Hail',
            99: 'Thunderstorm with Heavy Hail'
        };

        return weatherMapping[weatherCode] || 'Unknown';
    }

    document.getElementById('startPicker11').addEventListener('change', () => {
        const startDate = document.getElementById('startPicker11').value;
        const endDate = document.getElementById('endPicker22').value;
        if (startDate && endDate) {
            fetchDataAndUpdateChart(startDate, endDate);
        }
    });

    document.getElementById('endPicker22').addEventListener('change', () => {
        const startDate = document.getElementById('startPicker11').value;
        const endDate = document.getElementById('endPicker22').value;
        if (startDate && endDate) {
            fetchDataAndUpdateChart(startDate, endDate);
        }
    });
});
