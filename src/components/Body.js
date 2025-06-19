import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listRestaurents, setListRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="search-container">
        <h1>Search</h1>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredListRestaurents = listRestaurents.filter(
              (res) => res.info.avgRating > 4
            );
            setListRestaurants(filteredListRestaurents);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {listRestaurents.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
