import React from "react";
import {IoIosContact} from "react-icons/io";
import { commStyle } from "../commonStyle";


export function ReportTo({name,phone}){
    
    let phoneString = phone;

    //let areaCode = phoneString.substring(0,3);
 
    // let phoneNums = phone.substring(3,3);
    // let readablePhone =   "(" + areaCode + ") " ;
    
    return(
        <div className="rep" style={commStyle.spaceBetween}>
              <div style={{marginTop: 50, flex:2}}>
                <IoIosContact size="2em"/>
            </div>
            <div style={{textAlign:"left", flex:20}}>
                <h3 style={{fontWeight:"bold"}}>Report To</h3>
                <p>{name} {phone} </p>
                
            </div>
        </div>
    );
}