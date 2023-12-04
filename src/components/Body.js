import RestraunantCard from './RestrauntCard';
import restaurantList from '../utils/mockData';
import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const Body = ()=>{
  const [listOfRestauant, setlistOfRestratunt] = useState([])
  const filteredData = restaurantList.map((res)=>{return res.data.avgRating}).filter(d=> d>4);
  console.log('avg rating' +filteredData);
  
  useEffect(()=>{
    fetchData();
  },[]);

  
  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.9247697&lng=75.88628510000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonData =  await data.json();
    console.log(jsonData);
    //optional Chaining
    setlistOfRestratunt(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  //Conditional Rendering
  if(listOfRestauant.length ==0){
    return <Shimmer />
  }
   return(
        <div className="body">
            <div className='filter'>
               <button className="filter-btn" 
               onClick={()=> {
                const filteredList = listOfRestauant.filter((res)=>res.info.avgRating>4);
                setlistOfRestratunt(filteredList);
              }
              
              }
               >
               Top Rated Restaurants</button>
            </div>
           
            <div className="res-container">
            {console.log(listOfRestauant)}
              { 
                listOfRestauant.map((restraunant)=>(
                <RestraunantCard key={restraunant.info.id} resData={restraunant.info}/>
              ))} 
            </div>
        </div>
    )
}

export default Body;