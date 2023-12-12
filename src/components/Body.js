import RestraunantCard from './RestrauntCard';
import restaurantList from '../utils/mockData';
import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
const Body = ()=>{
  const [listOfRestauant, setlistOfRestratunt] = useState([]);
  const [filteredlistOfRestauant, setFilteredlistOfRestratunt] = useState([])
  const filteredData = restaurantList.map((res)=>{return res.data.avgRating}).filter(d=> d>4);
  const [inputTxtName, setInutTxtName] = useState("")
  console.log('avg rating' +filteredData);
  
  //whenerver astate variable update react triggers reconciliation cycle(re-renders the component);
  console.log("Body Rendered");
  useEffect(()=>{
    fetchData();
  },[]);

  
  const fetchData = async ()=>{
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.9247697&lng=75.88628510000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonData =  await data.json();
    console.log(jsonData);
    //optional Chaining
    setlistOfRestratunt(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredlistOfRestratunt(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  //Conditional Rendering
  if(listOfRestauant.length ==0){
    return <Shimmer />
  }
   return(
        <div className="body">
            <div className='filter'>
             <div className='search'>
                <input type="text" className='search-box' value={inputTxtName}
                onChange={(e)=>setInutTxtName(e.target.value)}
                />
                <button className='search-btn'
                onClick={()=>{
                  const filteredList = listOfRestauant.filter((res)=>
                    res.info.name.toLowerCase().includes(inputTxtName.toLowerCase()))

                  setFilteredlistOfRestratunt(filteredList);
                }}
                >Search</button>
             </div>   
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
                filteredlistOfRestauant.map((restraunant)=>(
                <Link key={restraunant.info.id} to={"/restraunts/"+ restraunant.info.id}><RestraunantCard  resData={restraunant.info}/></Link>
              ))} 
            </div>
        </div>
    )
}

export default Body;