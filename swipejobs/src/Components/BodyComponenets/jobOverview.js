import React from "react";
import { commStyle } from "../commonStyle";


export function JobOverview ({distance,hourlyRateInCents}){
    const hourlyRate = parseFloat(hourlyRateInCents)/100;
    
    return(
        <div style={styles.container}>
            <div style={{...commStyle.spaceBetween, ...styles.heading}}>
                <p>Distance</p>
                <p>Hourly Rate</p>
            </div>
            <div style={{...commStyle.spaceBetween, ...styles.content}}>
                <p id="miles">{distance} miles</p>
                <p id="hrly">${hourlyRate}</p>
            </div>
            
        </div>
    );
}

const styles= {
    heading:{
        color: "black"
    },
    content:{
        color: "white",
        fontSize: 50,
        
    },
    container:{
        backgroundColor:"#52d9a5",
        maxHeight:120,
    }
}