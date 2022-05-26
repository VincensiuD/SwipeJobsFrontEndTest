import React from "react";
import {useLocation} from 'react-router-dom';


export function Confirmation (){

    const location = useLocation();

    

    return(
        <div>
           
            <p>{location.state.message}</p>
            <p>{location.state.errorCode}</p>
           
        </div>


    );
}