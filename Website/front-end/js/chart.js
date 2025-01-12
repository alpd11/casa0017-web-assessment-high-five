// Function to load CSV data
function loadCSV(filePath, callback) {
  Papa.parse(filePath, {
    download: true,
    header: true, // Automatically map CSV headers to JSON keys
    complete: function (results) {
      console.log("CSV Data Loaded:", results.data); // Debugging
      callback(results.data);
    },
    error: function (error) {
      console.error("Error loading CSV:", error);
    },
  });
}

// Function to filter data by date range
function filterDataByDate(data, startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return data.filter((row) => {
    const currentDate = new Date(row.date);
    return currentDate >= start && currentDate <= end;
  });
}

// Function to calculate average collision count by weather type
function calculateAverageCollisions(data) {
  const weatherGroups = {};

  data.forEach((row) => {
    if (!weatherGroups[row.weather]) {
      weatherGroups[row.weather] = { totalCollisions: 0, days: 0 };
    }
    weatherGroups[row.weather].totalCollisions += parseInt(row.CollisionCount, 10);
    weatherGroups[row.weather].days += 1;
  });

  const averages = [];
  for (const [weather, values] of Object.entries(weatherGroups)) {
    averages.push({
      weather: weather,
      averageCollisions: values.totalCollisions / values.days,
    });
  }

  return averages;
}

// Function to render bar chart using Chart.js
function renderBarChart(averages) {
  console.log("Rendering Bar Chart with Averages:", averages); // Debugging

  const ctx = document.getElementById("myChart").getContext("2d");
  const weatherLabels = averages.map((item) => item.weather);
  const collisionData = averages.map((item) => item.averageCollisions);

  // Destroy existing chart instance to avoid duplication
  if (window.myChartInstance) {
    window.myChartInstance.destroy();
  }

  // Create a new Chart instance
  window.myChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: weatherLabels,
      datasets: [
        {
          label: "Average Collisions per Day",
          data: collisionData,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// Function to update the chart based on selected date range
function updateChart() {
  const startDate = document.getElementById("startPicker11").value;
  const endDate = document.getElementById("endPicker22").value;

  console.log("Selected Dates:", { startDate, endDate }); // Debugging

  if (startDate && endDate) {
    const filteredData = filterDataByDate(allData, startDate, endDate);
    const averages = calculateAverageCollisions(filteredData);

    console.log("Filtered Data and Averages:", { filteredData, averages }); // Debugging

    renderBarChart(averages);
  }
}

// Main function to load data and initialize the chart
function main() {
  const filePath = "Website\front-end\data2.csv"; // Replace with the correct relative path to your CSV file
  loadCSV(filePath, (data) => {
    allData = data; // Save data globally for later use
    updateChart(); // Initialize chart
  });

  // Attach event listeners to the date pickers
  document.getElementById("startPicker11").addEventListener("change", updateChart);
  document.getElementById("endPicker22").addEventListener("change", updateChart);
}

// Global variable to store the loaded data
let allData = [];

// Execute main function
main();
