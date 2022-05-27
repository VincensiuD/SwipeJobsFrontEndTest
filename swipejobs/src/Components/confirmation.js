import React from "react";
import {useLocation} from 'react-router-dom';


export function Confirmation (){

    const location = useLocation();

    

    return(
        <div style={{fontSize: 55}}>
           
            <p>{location.state.message}</p>
            <p>{location.state.errorCode}</p>
           
        </div>


    );
}