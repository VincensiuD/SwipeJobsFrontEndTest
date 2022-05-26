import {commStyle} from "./commonStyle";

export function Header({fullName}){

    return(
        <div style={{...commStyle.spaceBetween, ...style.headerStyle}}>
            <div>
                <p>swipejobs</p>
            </div>
            <div>
                <p>{fullName}</p>
            </div>
        </div>
        
    );
}

export const style = {
    headerStyle:{
        backgroundColor : "black",
        color: "white",
        fontSize: 35,
    }
}