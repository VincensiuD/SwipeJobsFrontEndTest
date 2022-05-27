import React from "react";
import {FaTools} from "react-icons/fa";
import { commStyle } from "../commonStyle";

export function Requirements ({toolsArray}){
    
    if(toolsArray === undefined)
    {
        toolsArray = ["none"];
    }
    
    return(
        <div className="req" style={{...commStyle.spaceBetween, paddingLeft:30}}>
              <div style={{marginTop: 50, flex:2}}>
                <FaTools size="2em"/>
            </div>
            <div style={{textAlign:"left", flex:20}}>
                <h3 style={commStyle.boldSubTitle}>Requirements</h3>
               { toolsArray.map((x) => 
                     <p> - {x}</p>               
                )
               }
            </div>
        </div>
    );
}