import { useDispatch } from "react-redux";
import {CDN_LINK} from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items})=>{
    console.log(items);
   const dispatch = useDispatch();
    const handleAddItem =(item)=>{
     dispatch(addItem(item))
    }
    return <div>
     {items.map((item)=>
        <div key={item.card.info.id} className="border-b-2  text-left p-2 m-2 flex justify-between">
          <div className=" w-9/12">
            <div className="py-2">
            <span>{item.card.info.name}</span>
            <span>- ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
            
            <div className="w-3/12 p-4">
                
                   
                {item.card.info.imageId && <button className="p-1  bg-black text-white absolute" onClick={()=>handleAddItem(item)}>Add+</button>}
                {item.card.info.imageId &&<img className="w-full" src={`${CDN_LINK}/${item.card.info.imageId}`} />}
                
            </div>
        </div>
        )}
    </div>
}

export default ItemList;