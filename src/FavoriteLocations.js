import React from "react";
import "./index.css";
function FavoriteLocations({ favorites }) {
  return (
    <div className="favorite-locations">
      <h2>Favorites</h2>
      <ul>
        {favorites.map((fav) => (
          <li key={fav}>{fav}</li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteLocations;
