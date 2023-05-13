const RestaurantCard = (props)=>{
    const {resData} = props;
    const {name, cuisines, avgRating, deliveryTime,costForTwo} = resData?.data
    return(
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src="https://st4.depositphotos.com/18645588/25027/i/450/depositphotos_250275316-stock-photo-spicy-mouth-watering-chicken-biryani.jpg"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4> 
            <h4>{costForTwo/100} for two</h4>
        </div>
    )
}

export default RestaurantCard;