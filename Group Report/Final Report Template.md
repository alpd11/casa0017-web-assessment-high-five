<!---

---
title: "CASA0017: Web Architecture Final Assessment"
author: "Steven Gray, Valerio Signorelli, Duncan Wilson, Sarah Wise"
date: "10 Dec 2020"
---

-->

# CASA0017-Web Architecture Group5 Report

High Five: Zinan Ye, Jiajie Hao, Yang Wenhao, Alp Durmusoglu

## Introduction

Cycling, as a green and environmentally friendly mode of transportation, offers significant advantages that make it a compelling choice for many. One key benefit is its unparalleled flexibility, allowing individuals to embark on their journeys at any time, free from constraints imposed by schedules or availability. In addition, cycling operates independently of external energy sources, making it a genuinely low-carbon and sustainable option that aligns perfectly with modern environmental priorities. Beyond its practicality, cycling also promotes physical fitness, providing a unique combination of health benefits and everyday functionality. These qualities have led to cycling becoming a widely embraced mainstream mode of transportation in developed countries. Notably, the United Kingdom stands out with high levels of bicycle usage and a substantial cycling population, reflecting the growing public interest in this eco-friendly and versatile mode of travel (Heinen, van Wee and Maat, 2010).

To meet the growing demand for cycling and further enhance the user experience, an increasing number of websites are dedicated to providing diverse information services for cyclists, such as precise route planning and real-time weather updates. However, a review of existing platforms reveals that many cycling-related websites in the UK have relatively narrow functionalities, often limited to a single data domain, such as weather, routes, or accident statistics, without offering comprehensive data integration or correlation analysis.

Currently, the internet hosts abundant cycling-related data resources, which are distributed across various platforms. However, existing online services rarely explore the correlations between different data sets. Therefore, the primary objective of this report is to propose an integrated solution by designing a website called One Biker that consolidates multidimensional cycling-related data, including weather factors and daily cycling accident statistics across regions. The website will employ visualization techniques to clearly demonstrate the relationships among these data sets. Additionally, it will offer practical travel recommendations based on data analysis, enhancing both the safety and convenience of cycling.


## Literature review

To provide a clear and intuitive view of urban maps, this website integrates map data from the CycleStreets API (https://www.cyclestreets.net/api/v2/). Users can interact with the map by clicking on specific locations to access detailed information, enhancing both interactivity and user experience. Additionally, weather and collision data are sourced from Open-Meteo (https://open-meteo.com/en/docs), which offers comprehensive meteorological datasets and open APIs to facilitate further analysis.

Existing studies highlight the significant impact of weather conditions on cyclists’ travel behavior and safety. For instance, adverse weather conditions such as rain, snow, high winds, and extreme temperatures have been shown to substantially increase the risk of accidents (Pucher and Buehler, 2017). However, much of the current research focuses on specific cities or single factors, with limited exploration of the integrated relationships between weather conditions and cycling accident rates (Goel et al., 2021). To address this gap, this study aims to link multidimensional data by correlating weather factors with regional accident rates, providing cyclists with actionable insights for safer travel and filling a critical void in the existing body of research.

Furthermore, by combining data from CycleStreets and Open-Meteo, this website enables real-time display of maps and weather information, offering users a more comprehensive and accurate service.
In addition to the data and research literature referenced in this section, the illustrations used in the storyboard were generated using OpenAI's image generation tools. These visuals were specifically created to represent the user scenarios outlined in the report and to support the description of user interactions.


## Design, storyboarding, outline of website

This section provides a detailed introduction to the website’s design philosophy, including the initial storyboarding, user interface design, and user experience design. The primary goal is to demonstrate the website’s core functionalities and interactive capabilities.

### 3.1 Storyboarding
To explore the scenarios in which users might interact with the website, storyboarding serves as a vital tool for illustrating the user journey. Through scenario-based descriptions and visualized design, the storyboard simulates the complete pathway from a user’s initial entry to the website to the successful completion of their objectives, providing valuable insights for optimizing the website’s design and functionality. In this project, the storyboard consists of five primary user scenarios, each representing a distinct stage of interaction.

The first scenario demonstrates how users discover the website through a search engine. Users enter keywords such as "the relationship between cycling and weather" and are directed to the homepage of the One Biker website. This scenario highlights how users find the website, ensuring that it is easily accessible.
 
Figure1_1_scenario1

The second scenario describes the process of users exploring the homepage. They scroll through introductory sections to learn about the website’s goals and features. Additionally, users may use the navigation bar to visit other pages, such as the “Analyse” or “About” pages.
 
Figure1_2_scenario2

The third scenario focuses on the “About” page, where users can learn about the research methods and data sources that underpin the website. This section enhances the website’s credibility and fosters user confidence in the insights provided by the platform.
 
Figure1_3_scenario3

The fourth scenario centers on the “Analyse” page. Here, users interact with an interactive map, clicking on specific locations to view data on weather conditions, accident statistics, and other relevant factors. Moreover, users can customize the time range to generate bar charts that visualize the average number of accidents under varying weather conditions.
 
Figure1_4_scenario4

The final scenario simulates a real-world use case in practical settings, completing the logical flow and ensuring the contextual relevance of the scenarios.
 
Figure1_5_scenario5

Through these scenarios, the storyboard clearly defines the logical flow of user interactions and lays the foundation for designing a seamless and intuitive user experience.

 
Figure1_5_storyboard

### 3.2 UX design

User experience (UX) design is a central element of the website, ensuring users can navigate and utilize its features efficiently and seamlessly. Focused on user needs, the design delivers an intuitive and satisfying experience. The key principles of UX design for One Biker are as follows:
The website features a simple and user-friendly navigation structure. A consistent navigation bar on all pages allows users to easily switch between the homepage, the Analyse page, and the About page, ensuring quick access to key features. Prominent shortcut links further encourage exploration of the core “Analyse” page.

The interactive map on the Analyse page provides dynamic, context-aware feedback. With a single click, users can access data on weather conditions, accident statistics, and other relevant factors, enhancing engagement. Data visualization is optimized with bar charts and real-time maps, offering clear insights into the relationship between weather and accident rates. Users can also filter data by time and factors, allowing deeper analysis and encouraging prolonged engagement.

Finally, the website offers personalized travel recommendations based on weather data. This tailored feedback enhances practicality and fosters user trust in the platform.
By optimizing navigation, interactive features, data clarity, and personalization, the UX design of One Biker ensures a seamless and valuable user experience.

 
Figure2_UX design

### 3.3 UI design

User Interface (UI) design plays a vital role in visually presenting the website while ensuring both attractiveness and usability. It also guides front-end code development. The UI design of One Biker follows principles of simplicity, consistency, and clarity, maintaining a style aligned with cycling and environmental themes.

The color scheme was carefully selected to reflect sustainability and innovation. The initial black minimalist theme (Figure 3) was replaced with green tones to emphasize eco-friendliness, paired with white text for clarity and harmony (Figure 4). This combination enhances visual appeal and fosters an emotional connection with users.

Typography and layout prioritize clarity and readability. Artistic fonts highlight the website name, while simple fonts ensure overall readability. A clear hierarchical structure directs attention to key elements, such as navigation menus and interactive maps, while ample white space keeps the interface clean and professional.

Interactive elements, including buttons, dropdown menus, and sliders, were designed for intuitiveness and responsiveness. Bold buttons draw attention, and dropdown menus enable easy data filtering on the Analyse page, aligning with user expectations to improve usability.

By combining an effective color scheme, clear typography, intuitive interactions, and responsive design, the UI design of One Biker delivers a cohesive and user-friendly interface.
   
Figure3_UI design_v1

## Development and Interactivity of site

### 4.1 Development of site 

#### 4.1.1 The "One Biker" website has a clear structure: 

##### (1) Three html files: 

homepage.html: 
As a landing interface, it mainly introduces the main content and functions of the website.  
 
The Bootstrap framework was used to build the layout of the homepage.html, which references the Bootstrap core CSS file and Bundle with Popper file, to facilitate the use of its predefined styles and interaction elements. Moreover, the homepage links to multiple CSS and JavaScript files, as well as the jQuery library. Google fonts are also linked to enrich the visual effects of the page. 

The Navigation Bar and Footer are designed using the Bootstrap framework. The Navigation Bar makes it easy to jump from one page to another, while the footer gives users the option to go back to the top of the page or jump to another three bike-related websites. 

The homepage page is planned and laid out using multiple <div> containers. For example, the <div> of the cover-container class acts as the main content container, which contains the main text and image layout of the page. The image-container and provide-container in the main part further divide the interior of the container.  
 
In addition, through <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">, the carousel component is added to the main body, and the autoplay and manual switching of pictures are realized. It is convenient for users to browse pictures of the core content of the website quickly. 

analyse.html: 
This is the core interface of this website, used for interactive data analysis of the number of bicycle accidents and weather factors.  
 
It introduces a map component, a presentation of content retrieved from a map, a bar chart, and two date filters. These components not only enhance the visual appearance of the page, but also enable users to analyze, and explore the connection between bicycle traffic data and weather changes more intuitively. 
 
about.html: 
A page that briefly describes our team and the goals of the project. 

##### (2) css folder 
 
cover.css: 
It is used to define the overall layout and style of pages, especially to set the background, text and image styles. 
 
layout.css: 
It mainly sets the size and style of the carousel. 
 
style.css: 
Specifies the style and performance of the map. 

##### (3) js folder 
 
chart.js： 
It is used to initialize and configure the bar chart of the “analyse” page. 
 
map.js： 
Initialize and configure the Google map on the “analyse” page. 
 
script.js: 
Using jQuery to write the hover, click, and leave effects of buttons, which enhances the visual feedback of buttons and enables users to get a more intuitive experience when interacting with pages. 

(4) Image folder 

Store the various images displayed on the web page. 

#### 4.1.2 The use of frameworks 

The "One Biker" uses Bootstrap and jQuery frameworks. Among them, Bootstrap is mainly used to build the main body style of the homepage, and the style of the navigation bar and footer in each page. 
 
jQuery is used to add mouse hover, click, and leave logic over buttons and hyperlinks. 
 
### 4.2 Interactivity of site 

The navigation bar and footer of each page have various jump logic, providing users with rich page resources.navigation bar and footer图 

In addition, on the Homepage, you can click and browse the carousel. Then after browsing the "What We Provide?” section, users can directly click the More Info button to jump to the analyse page and explore the bicycle route and the influence of weather on cycling. 

Similarly, on the “analyse” page, users can interact with the map to get 

Or interact with a bar chart showing the relationship between different weather types and the number of bike collisions through two time filters. 

## Data Collection, Handling, Cleaning and Management of Dataset 

As a data-driven project, reliable and high-quality data is vital for creating a meaningful and practical project with real-world meaning. In this project aims to analyze patterns between cycling collisions and weather conditions. By combining bicycle collision data from the CycleStreets API with historical data from Open-Metro during the period 2013-2023, this study utilise these datasets to present patterns and relations.  

This section outlines the methodologies and tools used to collect, clean and pre-process, and manage the datasets, which is beneficial for subsequent analysis and coding. 

### 5.1 Data Collection 

**Choice of Data**

For this project, the data collection process focused on records from 2013 to 2023, which is the latest period available of the CycleStreets API. The choice of data is taken after careful consideration and the collisions in the region of London, with cyclists as casualties who suffer slight injuries. In this way, more data can be obtained to see the patterns.  

For weather information, key factors, such as precipitation and wind speed, temperature, all of which have a significant impact on cycling for cyclists are included in the datasets.  

**API Access**

Accessing the CycleStreets API requires an API key, which can be obtained by registering for their developer program. The API key is for authentication and enables the project to make HTTP requests to the API endpoints. Below are the key parameters used in the project when obtaining datasets: 

Casualty type can be set to “cyclist” instead of “pedestrian” to exclude other kind of people get hurt. 

Severity level is also a parameter. The collisions are classified as "slight" to focus on less severe but more frequent incidents. 

Geographical boundary is a rectangle range with latitude and  longtitude to limit the geographical area to “London”. 

The Open-Metro API provides free service and API with API key and easier to obtain data by using the filter to choose the parameter with understandale.py file below the website. The availability of the data is also friendly, that is .csv file. 

**Data Extraction Process**

The data extraction was automated using backend scripts that interacted with the API. Each API request included appropriate filters to minimize unnecessary data and reduce processing time. The API responses, formatted in GeoJSON, were parsed and stored locally in a structured format (CSV). This structured format facilitated further data cleaning and analysis. 

The API request used in the project is as follows: https://api.cyclestreets.net/v2/collisions.locations?bbox=-0.510375,51.286760,0.334015,51.691874

&casualtiesinclude=cyclist&severity=slight&since=2013-01-01&until=2023-12-31&limit=2000. 

Below is the code correspondingly in server.js: 
       
        + `?key=${cycleStreetsApiKey}` 
        + `&bbox=${bbox}` 
        + `&since=${since}` 
        + `&until=${until}` 
        + `&limit=${limit}` 
        + `&page=${p}` 
        + `&casualtiesinclude=${casualtiesinclude}` 
        + `&field:severity=${severity}` 
        + `&datetime=sqldatetime` 
        + `&format=flat`;   

### 5.2 Data washing  
 
The collision data collected through the CycleStreets API was initially in .json format, which contains detailed information, such as geographical coordinates, collision severity, casualty type, time, all of which were unnecessary for this project’s analysis. Therefore, the. Json data required washing to create a simplified .csv file dataset containing only dates and total daily collision counts. 
 
Challenges in Data Extraction 
 
The problem is the huge size of the dataset. The API does not support extracting 10 years of data in a single request as pagination is prohibited and fixed maximum record limit for one request is 2,000. To overcome this, the data was extracted in a smaller time interval like half-year period. This required repeatedly adjusting the time parameters (since and until) in the API requests code (the picture is shown below). 
 
Besides, while the API provided a reliable dataset, its latest available data was 2023, which constrained the dataset and was hard to match to the desired study period. 
 
    const bbox = '-0.489,51.261,0.236,51.655'; 
    const since = '2017-07-01'; 
    const until = '2017-12-31'; 
    const severity = 'slight'; 
    const casualtiesinclude = 'cyclist'; 
    const limit = 2000; 
 
            FigureX _Data washing    
 
### 5.3 Data handling 

**Merge Multiple CSV Files**
 
All these files needed to be merged into a single dataset covering the period between 2013 to 2023. The merged file provided a daily total collision counts, which helps align with weather data for further analysis. 
The merging process was implemented using a Node.js script that rgenerated a structured output file (collisions_merged.csv) that was ready for integration with the weather dataset. 
 
Below is the core logic and code: 
    mergedLines.push('Date,CollisionCount'); 
    for (const file of csvFiles) { 
      const content = fs.readFileSync(path.join(__dirname, file), 'utf8'); 
      let lines = content.split('\n').map(line => line.trim()).filter(Boolean); 
      lines = lines.slice(1);  
      mergedLines.push(...lines); 
    } 
    const outputContent = mergedLines.join('\n'); 
    fs.writeFileSync(outputFile, outputContent, 'utf8'); 
 
Weather Data Preprocessing and Integration  
 
The weather dataset contained detailed daily information, including: 
•	average_temperature 
•	precipitation_sum 
•	wind_speed_10m_max 
•	sunshine_duration 
•	snowfall_sum 
To enrich the dataset and further calculating, a weather column was derived based on predefined conditions: 
•	Snow Day: snowfall_sum > 0.45 
•	Rainy Day: precipitation_sum > 3 
•	Sunny Day: sunshine_duration > 10000 
•	Cloudy Day: All other cases. 
 
These conditions were designed to categorize weather types effectively, enabling the analysis of how different weather conditions influenced cycling collisions. 
 
Below is the Node.js script used for weather category:  
 
fs.createReadStream(path.join(__dirname, weatherFile)) 
      .pipe(csvParser()) 
      .on('data', (row) => { 
        const weatherType = row.snowfall_sum > 0.45 
          ? 'Snowy' 
          : row.precipitation_sum > 3 
          ? 'Rainy' 
          : row.sunshine_duration > 10000 
          ? 'Sunny' 
          : 'Cloudy'; 
 
Afterward, the collision data and weather data were merged by matching dates. 
Therefore, this enriched dataset helps bridge the analyzing the relationship between weather conditions and cycling collisions, providing valuable insights into patterns and trends (An example of the dataset is shown in the figure below). 
            
             FigureX _Data handling 

## Data visualisations

Data visualisation is an indispensable component of this website, as a well-designed visualisation page can leave a lasting impression on users. The visualisation features of this platform are designed to effectively and intuitively present the relationship between weather conditions and cycling accidents. By implementing a variety of techniques, the website ensures that the data is displayed in a clear, interactive, and easily accessible manner.

### Interactive Map

The interactive map enhances the spatial exploration of cycling data. Users can click on specific locations on the map to retrieve detailed regional information. This functionality combines visualisation with geographic data, making it easier to identify regional trends and patterns.

Figure_Map

### Detailed Information Panel

The detailed information panel provides granular data for specific dates. By selecting a date using the date picker, the system retrieves corresponding data from the database and displays key metrics such as weather type, average temperature, maximum wind speed, and the number of cycling accidents. This panel supplements the visualisation tools by offering concrete and detailed analytical information, aiding users in understanding the impact of specific weather conditions on cycling behavior. Moreover, it provides analytical support for the bar chart that follows.

Figure_Detailed information

### Bar Chart
The bar chart is a critical element for presenting aggregated data. It visually displays the average daily number of cycling accidents under different weather conditions (e.g., sunny, rainy, or snowy). By selecting a specific time range using the time picker, the bar chart dynamically updates the data for the selected period. This interactive feature allows users to compare weather-related accident data intuitively, breaking preconceived notions and delivering impactful insights through clear visual representation.

These data visualisation tools collectively enhance the interpretability of the data. The integration of interactive charts, maps, and detailed information panels provides a cohesive and engaging framework for exploring the influence of weather conditions on cycling safety. This approach ensures that the visualisation not only informs but also captivates the user.

## Technical integration between frontend and backend services

The technical integration between frontend and backend services aims to facilitate data visualisation and interactive functionality, enhancing the overall user experience. The backend is primarily responsible for storing and providing data support, while the frontend leverages these resources to enable user interaction. The seamless connection between the two is critical to the system's functionality.

On the backend, the website employs structured formats, such as CSV files, to store preprocessed static data. To enable data sharing, the backend exposes these static files containing processed data. Both the backend and frontend are hosted on the same server, allowing the frontend to access these CSV files through specified relative paths. Using JavaScript tools, the frontend implements multiple modules to fetch and process this data efficiently.

For the detailed information panel, the frontend uses the find method to search through the backend data based on the user-selected date. The content of the matched row is then mapped to corresponding HTML elements on the webpage and dynamically updated using document.getElementById.

  ```JavaScript
  // Function to update detail information based on the selected date
  function updateDetailInfo(data, selectedDate) {
    const selectedRow = data.find(row => row.date === selectedDate);
  
    if (selectedRow) {
      document.getElementById("weather").textContent = selectedRow.weather || "N/A";
      document.getElementById("temperature").textContent = selectedRow.average_temperature || "N/A";
      document.getElementById("windSpeed").textContent = selectedRow.wind_speed_10m_max || "N/A";
      document.getElementById("bikeCount").textContent = selectedRow.CollisionCount || "N/A";
```

The bar chart leverages Chart.js to visualise the relationship between weather conditions and cycling incidents using data obtained from the backend. The PapaParse library is employed to parse the CSV files, with the Papa.parse method taking the file path as an argument and a callback function to handle the parsed data. After parsing, the data is filtered based on the user-selected time range using JavaScript's filter method. Subsequently, the reduce method calculates the average number of incidents for each weather type. Finally, the processed data is rendered into a bar chart using the Chart.js library.

```JavaScript
// Function to render bar chart using Chart.js
function renderBarChart(averages) {
  console.log("Rendering Bar Chart with Averages:", averages); // Debugging

  const ctx = document.getElementById("myChart").getContext("2d");
  const weatherLabels = averages.map((item) => item.weather);
  const collisionData = averages.map((item) => item.averageCollisions);
```

Additionally, the frontend incorporates buttons and event listeners to ensure that the data visualisation is refreshed promptly whenever the time range or date is modified by the user. This design ensures a seamless and dynamic user interaction with the platform.

```JavaScript
// Add event listener for date selection button
    const updateButton = document.getElementById("updateChartBtn");
    updateButton.addEventListener("click", () => {
      const startDate = document.getElementById("startPicker11").value;
      const endDate = document.getElementById("endPicker22").value;
      const newFilteredData = filterDataByDate(data, startDate, endDate);
      const newAverages = calculateAverageCollisions(newFilteredData);
      renderBarChart(newAverages);
    });
```

## Reflection and Future

Overall, the website successfully implemented the core functionalities of the front-end design, achieving seamless transitions between three distinct pages. The homepage provides a concise and clear guide for users on how to navigate the site. The analysis page, as the centerpiece of the website, presents four different categories of information and successfully integrates interactive design with data visualization. The "About" page offers a detailed overview of the methodologies employed and introduces the project team, enhancing the website's credibility and professionalism.

During the development process, several challenges were encountered. The original design intended to utilize real-time dynamic data; however, due to the lack of suitable real-time data sources, static datasets were used as a substitute. Moving forward, a primary focus will be on identifying appropriate data sources to enable real-time detailed information to be displayed when users interact with the map, further enhancing the dynamic interactivity of the user experience.

Additionally, the website's visualizations were initially planned to include an analysis of the relationship between accident counts and three factors: temperature, precipitation, and wind speed. However, due to the complexity of fitting a multivariate linear regression model, this feature could not be fully implemented at this stage. In the future, efforts will be made to optimize and complete this functionality by employing more efficient computational methods, providing users with deeper data insights and more impactful visualizations.

In terms of travel suggestions, the current implementation lacks sufficient data analysis to offer more tailored and rational advice. Future development will aim to refine this feature by conducting more in-depth analyses and improving the relevance and practicality of the suggestions provided. Additionally, the integration of a user review and comment section will be considered, enabling users to share experiences and feedback, further enriching the website’s utility and fostering a sense of community among its users.

Through the development of this project, we have not only applied theoretical knowledge in data visualization and interactive design but also identified clear directions for future improvements. This lays a solid foundation for further feature expansion and optimization.

 
## Reference List：

CycleStreets API (n.d.) CycleStreets API: Version 2. Available at: https://www.cyclestreets.net/api/v2/ (Accessed: 11 January 2025).

Goel, R., Goodman, A., Aldred, R., et al. (2021) Cycling behaviour in 17 countries across 6 continents: Levels of cycling, who cycles, for what purpose, and how far? Transport Reviews, 42(1), pp. 58-81. doi: 10.1080/01441647.2021.1915898.

Heinen, E., van Wee, B. and Maat, K. (2010) Commuting by bicycle: An overview of the literature. Transport Reviews, 30(1), pp. 59-96. doi: 10.1080/01441640903187001.

Open-Meteo (n.d.) Weather API Documentation. Available at: https://open-meteo.com/en/docs (Accessed: 11 January 2025).

Pucher, J. and Buehler, R. (2017) Making Cycling Irresistible: Lessons from The Netherlands, Denmark, and Germany. Transport Reviews, 28(4), pp. 495–528. doi: 10.1080/01441640701806612.

----

## Declaration of Authorship

We, ALL AUTHORS NAME HERE, confirm that the work presented in this assessment is my own. Where information has been derived from other sources, I confirm that this has been indicated in the work.


Digitally Sign with Your name Here

ASSESSMENT DATE 2025/1/13
