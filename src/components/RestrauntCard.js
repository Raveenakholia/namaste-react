import {CDN_LINK} from '../utils/constants';
const RestaurantCard = (props)=>{
    const {resData} = props;
    const {name, cuisines, avgRating, deliveryTime,costForTwo,cloudinaryImageId} = resData?.data
    return(
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src={`${CDN_LINK}/${cloudinaryImageId}`}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}minutes</h4> 
            <h4>{costForTwo/100} for two</h4>
        </div>
    )
}

export default RestaurantCard;