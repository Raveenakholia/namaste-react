import RestraunantCard ,{showVegLabel} from './RestrauntCard';
import restaurantList from '../utils/mockData';
import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import useRestrauntData from '../utils/useRestrauntData';
const Body = ()=>{
  const [listOfRestauant, filteredlistOfRestauant, setlistOfRestratunt,setFilteredlistOfRestratunt] = useRestrauntData();
  const filteredData = restaurantList.map((res)=>{return res.data.avgRating}).filter(d=> d>4);
  const [inputTxtName, setInutTxtName] = useState("")
  
 // console.log('list of  restraunts' +listOfRestauant);
  
  //whenerver astate variable update react triggers reconciliation cycle(re-renders the component);
  console.log("Body Rendered");
  const ShowVegLabel = showVegLabel(RestraunantCard);
   //check whthter user is connected to internet
   const onlineStatus =  useOnlineStatus();
   if(onlineStatus==false) return <h1>Ooops Please check your internet connection you are offline</h1>
  //Conditional Rendering
  if(listOfRestauant.length ==0){
    return <Shimmer />
  }
   return(
        <div className="body">
            <div className='filter flex'>
             <div className='search px-2'>
                <input type="text" className='border border-solid border-black' value={inputTxtName}
                onChange={(e)=>setInutTxtName(e.target.value)}
                />
                <button className='px-4 py-1 bg-green-200 m-4 rounded-md'
                onClick={()=>{
                  const filteredList = listOfRestauant.filter((res)=>
                    res.info.name.toLowerCase().includes(inputTxtName.toLowerCase()))

                  setFilteredlistOfRestratunt(filteredList);
                }}
                >Search</button>
             </div>   
            <button className="px-4 py-1 bg-gray-100 m-4 rounded-md" 
               onClick={()=> {
                const filteredList = listOfRestauant.filter((res)=>res.info.avgRating>4);
                setlistOfRestratunt(filteredList);
              }
              
              }
               >
               Top Rated Restaurants</button>
            </div>
           
            <div className="flex flex-wrap">
              {console.log(listOfRestauant)}
                { 
                  filteredlistOfRestauant.map((restraunant)=>(
                  <Link key={restraunant.info.id} to={"/restraunts/"+ restraunant.info.id}>
                 {restraunant.info.veg==true?  <ShowVegLabel resData={restraunant.info}/>:<RestraunantCard  resData={restraunant.info}/>}
                 
                  
                  </Link>
                ))} 
            </div>
        </div>
    )
}

export default Body;