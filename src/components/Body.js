import RestraunantCard from './RestrauntCard';
import restaurantList from '../utils/mockData';

const Body = ()=>{
  const filteredData = restaurantList.map((res)=>{return res.data.avgRating}).filter(d=> d>4);
  console.log('avg rating' +filteredData);
    return(
        <div className="body">
            <div className="search">Serach</div>
            <div className="res-container">
              {restaurantList.map((restraunant)=>(
                <RestraunantCard key={restraunant.data.id} resData={restraunant}/>
              ))} 
            </div>
        </div>
    )
}

export default Body;