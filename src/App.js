import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import React, {lazy, Suspense} from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs.js";
import Error from "./components/Error.js";
import RestrauntMenu from "./components/RestrauntMenu.js";
import userContext from "./utils/userContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from './components/Cart.js'

const AppLayout = ()=>{
    return (
        <div className="app">
           <Provider store={appStore}>
           <userContext.Provider value={{loggedInUser:"raveena"}}>
             <Header />
            </userContext.Provider>
            <Outlet />
            </Provider>
        </div>
        )
}
//Chunking
//dynamic import
//dynamic loading
//code splitting
//on demand loading
//lazy loading
const Grocery = lazy(()=>import("./components/Grocery.js"))

const router = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        errorElement : <Error/>,
        children:[
        {
            path:"/",
            element : <Body/>
        },    
        {
            path:"/about",
            element : <About/>
        },
        {
            path:"/contact",
            element : <ContactUs/>
        },
        {
            path:"/restraunts/:resId",
            element : <RestrauntMenu/>
        },
        {
            path:"/grocery",
            element : <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
        },
        {
            path:"/cart",
            element : <Cart/>
        },
    
    ]
    },
    
])


 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>) 



























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