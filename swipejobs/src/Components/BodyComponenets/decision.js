import { commStyle } from "../commonStyle";
import React from "react";
export function Decision(){
    // const [bgColour, setBgColour] = React.useState("white");

    // function highlight(){
    //     setBgColour("black");
    // }

    // function reset(){
    //     setBgColour("white");
    // }


    function xx(){
        console.log("xx")
    }

    return(
        <div style={style.btnFlex}>
            <button style={style.button} className="btn" onClick={xx} >
                No Thanks
            </button>
            <button style={style.button} className="btn">
                I'll Take it
            </button>
        </div>
    );
}

const style = {
    button:{
        borderRadius: 3,
        color: "grey",
        width: 250,
        height: 70,
        margin: 2,
        fontSize: 27,

    },
    btnFlex:{
        display: "flex",
        justifyContent:"center"

    }
}