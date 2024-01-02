import { useEffect, useState } from "react"

const useRestrauntData = ()=>{
    const [listOfRestauant, setlistOfRestratunt] = useState([]);
    const [filteredlistOfRestauant, setFilteredlistOfRestratunt] = useState([])
  
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.9247697&lng=75.88628510000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData =  await data.json();
        //console.log('jsondata'+ jsonData);
        //optional Chaining
        setlistOfRestratunt(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredlistOfRestratunt(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        return [listOfRestauant, filteredlistOfRestauant, setlistOfRestratunt, setFilteredlistOfRestratunt]
}

export default useRestrauntData;