import React from "react";

export function Body({workerIdn}){

const [jobsArray,setJobsArray] = React.useState([]);


    React.useEffect(
        () => {
          const fetchedData = async () => {
          
            const response = await
             fetch(`https://test.swipejobs.com/api/worker/${workerId}/matches`);           
             const data = await response.json();  
             setJobsArray(data);               
          };
          fetchedData()
            .catch(console.error);
        }, []);


    return(
        <div>

        </div>
    );
}