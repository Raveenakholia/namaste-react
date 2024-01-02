import {CDN_LINK} from '../utils/constants';
import React from 'react';
const RestaurantCard = (props)=>{
    const {resData} = props;
    const {name, cuisines, avgRating,costForTwo,cloudinaryImageId} = resData;
    const deliveryTime = resData.sla.deliveryTime;
    return(
        <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg">
            <img alt="res-logo" className="rounded-lg" src={`${CDN_LINK}/${cloudinaryImageId}`}/>
            <h3 className='font-bold py-2 text-lg'>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime} minutes</h4> 
            <h4>{costForTwo}</h4>
        </div>
    )
}

export const showVegLabel = (RestaurantCard)=>{
    return (props)=>{
        return (
              <div>
               <label className='absolute bg-black text-white px-4 py-1 m-4 rounded-lg '>Veg</label>
               <RestaurantCard {...props}/>
               </div>
        )
           
    }
}

export default RestaurantCard;