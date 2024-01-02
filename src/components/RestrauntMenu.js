import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauntCategory from "./RestrauntCategory";
import { useState } from "react";

const RestrauntMenu = ()=>{
    const {resId }= useParams();
    const [showIndex, setShowIndex] = useState(null)
    const resInfo  = useRestrauntMenu(resId); 
   
    
    if(resInfo===null) return <Shimmer/>
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info
    console.log(resInfo?.cards[0]?.card?.card?.info);
    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));

    console.log(categories)
    return(
        <div className="text-center">
            <h1 className="font-bold text-center text-lg">{name}</h1>
            <p>{cuisines.join(",")}- {costForTwoMessage}</p>
            {categories.map((card, index)=>{
                return <RestrauntCategory key={card.card.card.title} 
                    data={card.card.card} 
                    setShowIndex={()=>setShowIndex(index)}
                    showItem={index==showIndex?true:false}/>
            })}
        </div>
      
    )
}

export default RestrauntMenu