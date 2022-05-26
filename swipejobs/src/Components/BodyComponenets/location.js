import React from "react";
import { commStyle } from "../commonStyle";
import  {IoLocationSharp} from "react-icons/io5";

export function Location({address,distance}){
    

    return(
        <div style={commStyle.spaceBetween}>
            <div style={{marginTop: 50, flex:2}}>
                <IoLocationSharp size="2em"/>
            </div>
            <div style={{textAlign:"left", flex:20}}>
                <p>Location</p>
                <p>{address}</p>
                <p>{distance} miles from your job search location</p>
            </div>
            <div style={{ marginTop:30}}>
                <a 
                style={{fontSize:50, color:"black"}}
                href={`https://www.google.com/maps/search/?api=1&query=${address}`}>
                &gt;
                </a>
               
            </div>
        </div>
    );
}