import { commStyle } from "../commonStyle";
import React from "react";
import { useNavigate } from "react-router-dom";





export function Decision({workerId,jobId}){

    let navigate = useNavigate();
    // const [bgColour, setBgColour] = React.useState("white");

    // function highlight(){
    //     setBgColour("black");
    // }

    // function reset(){
    //     setBgColour("white");
    // }


    async function accept(){
        
        const response = await fetch(`https://test.swipejobs.com/api/worker/${workerId}/job/${jobId}/accept`);

        const data = await response.json();

        data.success?
            navigate("/Confirmation",{state:{message: "successfully accepted"}}) :
        navigate("/Confirmation",{state:{message:data.message, errorCode:data.errorCode}});
        
      
    }

    async function reject(){
        
        const response = await fetch(`https://test.swipejobs.com/api/worker/${workerId}/job/${jobId}/reject`);

        const data = await response.json();

        data.success? 
            navigate("/Confirmation",{state:{message: "successfully rejected"}}) :

        navigate("/Confirmation",{state:{message:data.message, errorCode:data.errorCode}});
        
        }

    

    return(
        <div style={style.btnFlex}>
            <button className="btn hover" onClick={reject} >
                No Thanks
            </button>
            <button  className="btn hover" onClick={accept}>
                I'll Take it
            </button>
            
        </div>
    );
}

const style = {
    
    btnFlex:{
        display: "flex",
        justifyContent:"center"

    }
}