import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestrauntMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async ()=>{
        const data = await fetch(MENU_API + resId);
        const responseJson =  await data.json();
        setResInfo(responseJson.data)
    }
    return resInfo
}

export default useRestrauntMenu;