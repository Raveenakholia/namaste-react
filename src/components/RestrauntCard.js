import {CDN_LINK} from '../utils/constants';
import React from 'react';
const RestaurantCard = (props)=>{
    const {resData} = props;
    const {name, cuisines, avgRating,costForTwo,cloudinaryImageId} = resData;
    const deliveryTime = resData.sla.deliveryTime;
    return(
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src={`${CDN_LINK}/${cloudinaryImageId}`}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime} minutes</h4> 
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;