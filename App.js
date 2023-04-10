import React from "react";
import ReactDOM from "react-dom/client";

/*
*  Header
* - Logo
* - Nav Items  
* Body
* -Search
* - Restraunt Container
*   Rest Card
*     - image, Name of the res, cuisines, delivery time , Star Rating
*
* Footer
* -copyright
*-link
*-address
*-contact
*/

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

const RestraunantCard = ()=>{
    return(
        <div className="res-card">
            <h3>Meghna Foods</h3>
        </div>
    )
}

const Body = ()=>{
    return(
        <div className="body">
            <div className="search">Serach</div>
            <div className="res-container">
                <RestraunantCard/>
            </div>
        </div>
    )
}
const AppLayout = ()=>{
    return (
        <div className="app">
            <Header/>
            <Body />
        </div>
    )
}
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>) 



























//React.createElement=> ReactElement(JS Object)  ==> HTML(Browser rendering)

// const parent = React.createElement("div" , {id:"parent"}, [React.createElement("div",{id:"child"},React.createElement("h1",{id:"heading"},"This is Namste React 🚀 ")),
// React.createElement("div",{id:"child"},React.createElement("h1",{id:"heading"},"Complex structure"))])


// const heading =  React.createElement("h1", {id:"heading"}, "Hello World from React");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);


//React Element
// JSX=> React.createElement= ReactElement (JS Object) = > HTMLElement(render)
// const jsxHeading = <h1>
//     hello
//     </h1>;

// const Title = ()=>(
//     <h1>This is title</h1>
// )

// //component compositions
// const HeadingComponent = ()=>{
//     return (
//         <div id="container">
//             {Title()}
//             <Title />
//             <Title></Title>
//             <h1 className="heading">Namaste React from Functional Component</h1>
//         </div>
        
//     )
// }  