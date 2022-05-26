

export function Header({fullName}){

    return(
        <div style={style.headerStyle}>
            <div>
                <p>swipejobs</p>
            </div>
            <div>
                <p>{fullName}</p>
            </div>
        </div>
        
    );
}

const style = {
    headerStyle:{
        backgroundColor : "black",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
    }
}