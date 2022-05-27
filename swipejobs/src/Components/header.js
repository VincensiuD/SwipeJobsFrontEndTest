import {commStyle} from "./commonStyle";

export function Header({fullName}){

    return(
        <div style={{...commStyle.spaceBetween, ...style.headerStyle}}>
            <div>
                <p style={{paddingLeft: 15}}>swipejobs</p>
            </div>
            <div>
                <p style={{paddingRight: 15}}>{fullName}</p>
            </div>
        </div>
        
    );
}

export const style = {
    headerStyle:{
        backgroundColor : "black",
        color: "white",
        fontSize: 45,
    }
}