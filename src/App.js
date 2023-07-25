import React, { useState, useEffect } from "react";
import axios from "axios";
import FavoriteLocations from "./FavoriteLocations";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [favorites, setFavorites] = useState([]);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=544a71c74bf25a90854eba8e4e3611e1
`;
  useEffect(() => {
    // Retrieve favorites from local storage on initial render
    const storedFavorites = localStorage.getItem("weatherAppFavorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    // Update local storage whenever the favorites list changes
    localStorage.setItem("weatherAppFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
          setData({}); // Clear data if there's an error
        });
      setLocation("");
    }
  };
  const handleFavoriteToggle = () => {
    if (favorites.includes(data.name)) {
      // Remove from favorites if already present
      setFavorites(favorites.filter((fav) => fav !== data.name));
    } else {
      // Add to favorites if not present
      setFavorites([...favorites, data.name]);
    }
  };

  return (
    <div className="App">
      <FavoriteLocations favorites={favorites} />
      <div className="search">
        <input
          className="search-bar"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          {/* <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div> */}
          {/* Add a button to toggle favorite */}
          {data.name !== undefined && (
            <div className="favorite-button">
              <button onClick={handleFavoriteToggle}>
                {favorites.includes(data.name)
                  ? "Remove from Favorites"
                  : "Add to Favorites"}
              </button>
            </div>
          )}
        </div>
        {/* Display favorite locations on the right */}

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°C</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
