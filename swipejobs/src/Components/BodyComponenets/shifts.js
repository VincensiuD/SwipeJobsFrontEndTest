import React from "react";
import {FaCalendarAlt} from "react-icons/fa";
import { commStyle } from "../commonStyle";

export function Shifts({timeArray}){
    
    
  function dateConverter(isoDate1,isoDate2){
    
      
       let startDate = new Date(isoDate1);
       let endDate = new Date(isoDate2);

        let date = startDate.getDate();
        let month = startDate.toLocaleString("en-US", { month: "short" });
        let day = startDate.toLocaleString("en-US", { weekday: "short" });
        let startTime = startDate.toLocaleString("en-US", { timeStyle: "short" });
        let endTime = endDate.toLocaleString("en-US", { timeStyle: "short" });

        return month + " " + date + ", " + day + " " + startTime + " - " + endTime + " PDT";

  }

   
    
    return(
        <div  style={commStyle.spaceBetween}>
             <div style={{marginTop: 50, flex:2}}>
                <FaCalendarAlt size="2em"/>
            </div>
            <div style={{textAlign:"left", flex:20}}>
                <h3 style={commStyle.boldSubTitle}>Shift Dates</h3>
                { timeArray.map((x) => 
                     <p style={{textTransform:"uppercase"}}>  {dateConverter(x.startDate,x.endDate)}</p>               
                )
               }
            </div>
            
        </div>
    );
}