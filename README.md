# CASA0017 One Biker: Analyzing Weather Impacts on Cycling Collisions

## Project Overview

The **One Biker** project analyzes the impact of weather conditions on cycling collision trends in London from 2013 to 2023. By combining data from the CycleStreets API (collision data) and Open-Meteo API (weather data), the project examines how factors such as precipitation, temperature, and wind speed influence cycling safety. 

### Project Goals

+ To investigate patterns between weather conditions and cycling collisions.
+ To develop an interactive web application that visualizes cycling collision trends and weather impacts.
+ To provide actionable insights for policymakers and urban planners.

## Key Features

### 1. Interactive Visualizations

Implemented using `chart.js`, and `detailInfo.js` to display  collision trends in any range of date and also detailed information by selecting date correspondingly.

### 2. Comprehensive Dataset

Data from the CycleStreets API (collision data) and Open-Meteo API (weather data) were merged.

### 3.  Responsive and User-Friendly Design

+ **Intuitive Interface:  **A clean and responsive layout optimized for user navigation across the homepage, analysis page, and about page.

+ **Responsive design:** The website uses the **Bootstrap** framework to ensure consistent performance across desktop, tablet, and mobile devices.

### **4. Embedded Collision Map**

- Integrates a CycleStreets map to visualize collision hotspots within London.
- The map is embedded directly using an `<iframe>` for seamless interaction.



## **Data Processing and Technology Stack**

### **Data Processing**

- **Data Sources**:

  + **CycleStreets API**: Collision data for cyclists in London (2013–2023).

  - **Open-Meteo API**: Weather data including temperature, precipitation, and wind speed.

- **Processing Steps**:

  - Retrieved collision data using Node.js scripts, parsed JSON responses, and converted them into `.csv` format for analysis.
  - Merged collision and weather datasets into a unified file, adding a `weather` column (Sunny, Rainy, Cloudy, Snowy) based on predefined thresholds.
  - Prepared structured datasets for front-end visualization, ensuring compatibility with `chart.js`.

### **Technology Stack**

- **Frontend**:
  - HTML, CSS, JavaScript
  - `chart.js` for creating dynamic bar and line charts.
  - Embedded interactive maps using CycleStreets `<iframe>` functionality.
- **Backend**:
  - Node.js and Express.js for API integration and data preprocessing.
  - Batch processing of API data and `.csv` file generation.
- **Visualization Tools**:
  - **Chart.js**: Used to display dynamic charts for collision and weather trends.
  - **Bootstrap**: Ensures responsive layout and predefined UI components.
  - Embedded CycleStreets map to show geographical collision data interactively.



## Contributors
## 贡献者

<a href="https://github.com/alpd11/casa0017-web-assessment-high-five">
  <img src="https://contrib.rocks/image?repo=alpd11/casa0017-web-assessment-high-five" />
</a>
