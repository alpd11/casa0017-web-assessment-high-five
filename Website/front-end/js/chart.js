document.addEventListener('DOMContentLoaded', function() {
    // Gets the context of the chart container
    const ctx = document.getElementById('lineChart').getContext('2d');
  

    new Chart(ctx, {
      type: 'bar', 
      data: {
        labels: ['Sunny', 'Rainy', '11', '22', '33', '44'], // X-axis label
        datasets: [{
          label: 'Sample Data', 
          data: [0, 10, 20, 30, 40, 50], // data point
          borderColor: 'rgb(220, 235, 222)', // line color
          backgroundColor: 'rgba(5, 250, 13, 0.2)', // fill color
          fill: true // Fill area or not
        }]
      },
      options: {
        responsive: true, // Responsive
        scales: {
          x: {
            title: {
              display: true,
              text: 'Weather' // X-axis heading
            }
          },
          y: {
            title: {
              display: true,
              text: 'Number' // Y-axis heading
            }
          }
        }
      }
    });
  });