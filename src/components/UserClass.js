 import React from "react";

 class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            userInfo :{
                name: "Rabveena"
            }
        }
       // console.log(this.props.name +"Construtor called");
    }
    async componentDidMount(){
        //console.log(this.props.name +"component did mount");
        const data = await fetch("https://api.github.com/users/Raveenakholia");
        const jsonData = await data.json();
        console.log(jsonData);
        this.setState({userInfo:jsonData})


    }
    render(){
        const {name, avatar_url, bio, location} = this.state.userInfo
        //console.log(this.props.name +"Render method")
        return <div className="about-user">
        <img src={avatar_url}/>
         <h1>{name}</h1>
         <h2>{bio}</h2>
         <h3>{location}</h3>
        </div>
    }
 }

 export default UserClass;