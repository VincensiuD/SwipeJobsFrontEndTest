import React from "react";
import { commStyle } from "../commonStyle";

export function JobHeader({jobTitle, companyName, imageUrl}){
    
    return(
        <div >
            <img src={imageUrl} alt="job illustration" className="photo"/>
            <h2 style={{...commStyle.boldSub, ...style.h2}}> {jobTitle}</h2>
            <p style={{...commStyle.boldSub, ...style.p}}>{companyName}</p>
        </div>
    );
}

const style={
    h2:{
        fontSize:30,
        alignText:"left",
        paddingLeft: 20,
    },
    p:{
        fontSize: 25,
        paddingLeft:20
    }
}
