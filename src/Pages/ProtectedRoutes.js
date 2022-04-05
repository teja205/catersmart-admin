import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";




function ProtectedRoute(props){
    const history = useHistory();

    useEffect(() =>{
        if(!localStorage.getItem('user-info')){
            history.push("/")
        }
    },[])

    let Component=props.component
    return(
        // <Route {...rest} render={(props) => {
        //     if(auth) return <Component {...props}/>
        //     if(!auth) return <Redirect to={{path:"/",state : {from: props.location}}} />
        // }} />
        <>
            <Component />
        </>
    );
};

export default ProtectedRoute;