import React from 'react';
import UserClass from './UserClass';
import { Component } from 'react';
import userContext from '../utils/userContext';

class About extends Component{
    constructor(props){
        super(props)
        
            //console.log("Parent Constructor Called")
        
    }

    render(){
        //console.log("Parent Render Called")
        return (
            <div>
                <h1>About component</h1>
                <userContext.Consumer>
                {(data)=><h1>{data.loggedInUser}</h1>}
                </userContext.Consumer>
                <UserClass name="Raveena kholia"/>
            </div>
        );
    }
}
// function About(props) {
//     return (
//         <div>
//             <h1>About component</h1>
//             <UserClass name="Raveena kholia"/>
//             <UserClass name="Shobit Mahajan"/>
//             <UserClass name="Raveena Shobit"/>
//         </div>
//     );
// }

export default About;