import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;

  return (
    <div
      className="res-card"
      style={{ backgroundColor: "#e1f5ed", borderRadius: "10px" }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(" , ")}</h3>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} Rating</h4>
      <h4>{resData?.info.sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
