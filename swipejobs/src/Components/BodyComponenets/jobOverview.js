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
                <p id="miles">{distance.toFixed(2)} miles</p>
                <p id="hrly">${hourlyRate.toFixed(2)}</p>
            </div>
            
        </div>
    );
}

const styles= {
    heading:{
        color: "black",
        paddingLeft:10,
        paddingRight:10,
        fontWeight: "bold",
    },
    content:{
        color: "white",
        fontSize: 45,
        fontWeight: "bold",
        paddingLeft:10,
        paddingRight:10,
        
    },
    container:{
        backgroundColor:"#52d9a5",
        maxHeight:120,
        padding:10,
    }
}