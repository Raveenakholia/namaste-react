import { useRouteError } from "react-router-dom";

const Error =()=>{
    const err = useRouteError();
    return(
        <div className="ErrorPage">
         <h1>Oops!!!!!</h1>
         <h1>Something went wrong</h1>
         <h1>{err.status}:{err.statusText}</h1>
        </div>
    )
}

export default Error;