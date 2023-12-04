import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import React from "react";

const AppLayout = ()=>{
    return (
        <div className="app">
            <Header />
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