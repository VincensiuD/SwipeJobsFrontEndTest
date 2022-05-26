import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

export function Decision(){

    return(
        <div>
            <button style={style.button}>
                No Thanks
            </button>
            <button style={style.button}>
                I'll Take it
            </button>
        </div>
    );
}

const style = {
    button:{
        borderRadius: 3,
        backgroundColor: "black",
        color: "white",
        width: 250,
        height: 70,
        margin: 2,

    }
}