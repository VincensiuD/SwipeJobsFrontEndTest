import React from "react";


export function JobHeader({jobTitle, companyName, imageUrl}){
    
    return(
        <div>
            <img src={imageUrl} alt="job illustration"/>
            <p>{jobTitle}</p>
            <p>{companyName}</p>
        </div>
    );
}



// import React from "react";


// export function (){
    
    
//     return(
//         <div>
            
//         </div>
//     );
// }