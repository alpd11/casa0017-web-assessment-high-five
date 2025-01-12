let chartInstance; // To store the Chart.js instance for updates

// Function to fetch collision data based on dates
async function fetchCollisionData(startDate, endDate) {
    const apiKey = '655a7d85703df57d'; // Replace with your actual API key
    const url = `https://www.cyclestreets.net/api/v2/collisions.locations?key=${apiKey}&bbox=-0.5,51.28,0.3,51.68&zoom=12`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.features) {
            // Filter features by date range
            return data.features.filter(feature => {
                const collisionDate = new Date(feature.properties.collision_date);
                return collisionDate >= new Date(startDate) && collisionDate <= new Date(endDate);
            });
        } else {
            throw new Error('Invalid data format from API');
        }
    } catch (error) {
        console.error('Error fetching collision data:', error);
        return [];
    }
}

// Function to process collision data
function processCollisionData(features) {
    const collisionCounts = features.reduce((acc, feature) => {
        const severity = feature.properties.collision_severity;
        acc[severity] = (acc[severity] || 0) + 1;
        return acc;
    }, {});

    const labels = Object.keys(collisionCounts).sort();
    const counts = labels.map(label => collisionCounts[label]);

    return { labels, counts };
}

// Function to create/update the chart
async function updateChart(startDate, endDate) {
    const features = await fetchCollisionData(startDate, endDate);
    const { labels, counts } = processCollisionData(features);

    const ctx = document.getElementById('lineChart').getContext('2d');

    if (counts.length === 0) {
        document.getElementById('chartError').style.display = 'block';
        if (chartInstance) chartInstance.destroy(); // Clear chart if no data
        return;
    } else {
        document.getElementById('chartError').style.display = 'none';
    }

    // If a chart instance exists, destroy it before creating a new one
    if (chartInstance) chartInstance.destroy();

    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Collision Counts by Severity',
                data: counts,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Collision Severity',
                    },
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Collisions',
                    },
                },
            },
        },
    });
}

// Event listeners for date pickers
document.addEventListener('DOMContentLoaded', () => {
    const startPicker = document.getElementById('startPicker11');
    const endPicker = document.getElementById('endPicker22');

    const updateChartIfDatesValid = () => {
        const startDate = startPicker.value;
        const endDate = endPicker.value;
        if (startDate && endDate && new Date(startDate) <= new Date(endDate)) {
            updateChart(startDate, endDate);
        } else {
            document.getElementById('chartError').textContent = 'Invalid date range selected.';
            document.getElementById('chartError').style.display = 'block';
        }
    };

    startPicker.addEventListener('change', updateChartIfDatesValid);
    endPicker.addEventListener('change', updateChartIfDatesValid);
});
 