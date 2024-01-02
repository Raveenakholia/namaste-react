import { useState } from "react";
import ItemList from "./ItemList";
const RestrauntCategory = ({data, showItem, setShowIndex}) =>{
    const handleClick = ()=>{
        setShowIndex();
    }
    return <div className="w-6/12 shadow-lg m-auto p-4 my-4  bg-gray-50">
       <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        <span>⬇ </span>
       </div>
       {showItem && <ItemList items={data.itemCards}/>}
    </div>
}

export default RestrauntCategory;