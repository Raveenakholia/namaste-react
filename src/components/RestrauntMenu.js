import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestrauntMenu = ()=>{
    const [resInfo, setResInfo]= useState(null);
    const {resId }= useParams();
    
    console.log(resId);
    useEffect(()=>{
        fetchName();
    },[])
    const fetchName = async ()=>{
        const data = await fetch(MENU_API + resId);
        const responseJson =  await data.json();
        console.log(responseJson);
        setResInfo(responseJson.data)
    }
    if(resInfo===null) return <Shimmer/>
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info
    console.log(resInfo?.cards[0]?.card?.card?.info);
    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    return(
        <div className="menu-card">
            <h1>{name}</h1>
            <p>{cuisines.join(",")}- {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
             {itemCards.map(res=>{
                return <li key={res.card.info.id}>{res.card.info.name} {"- Rs"} {res.card.info.price/100}</li>
             })}
            </ul>
        </div>
      
    )
}

export default RestrauntMenu