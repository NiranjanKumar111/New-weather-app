Weather App README

Features
The Weather App is a simple web application that provides real-time weather information for a specified location. It offers the following features:

Weather Data Display: The app displays the current weather data, including the location name, temperature, weather description, feels-like temperature, humidity, and wind speed in metric units (Celsius and MPH).

Search Functionality: Users can enter a location in the search input and press Enter to get the weather information for that location.

Favorite Places: Users can mark a location as their favorite by clicking the "Add to Favorites" button. The favorite locations are displayed on the right side of the app.

Error Handling: The app gracefully handles errors if an invalid or non-existent location is entered. It clears the weather data display and allows users to try again.

Implementation
The Weather App is built using React, a popular JavaScript library for building user interfaces. The app utilizes the OpenWeatherMap API to fetch real-time weather data for the specified location.

The main components used in the app are:

App: The main component that handles the state of the app, including weather data, location input, and favorite locations.

FavoriteLocations: A separate component responsible for rendering the list of favorite locations.

Additional Information
The Weather App is a simple showcase project. It primarily focuses on demonstrating the usage of React, API integration, and basic user interface features.

Feel free to explore the code and customize the app as needed. Enjoy the weather data for your favorite locations!
