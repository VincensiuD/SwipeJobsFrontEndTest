import React from "react";
import { Decision, JobHeader, JobOverview, Location, Shifts, Requirements, ReportTo } from "./BodyComponents";

export function Body({ workerId }) {
  const [jobsArray, setJobsArray] = React.useState([]);

  React.useEffect(() => {
    const fetchedData = async () => {
      const response = await fetch(
        `https://test.swipejobs.com/api/worker/${workerId}/matches`
      );
      const data = await response.json();
      setJobsArray(data);
    
    };
    fetchedData().catch(console.error);
  }, []);

  let index = 0;

  return (
    <div>
     {jobsArray.map((x,key)=>
     <div style={{border: "20px solid grey"}} >
        <JobHeader
        key={"jobHeader" + index}
        imageUrl={x.jobTitle.imageUrl}
        jobTitle={x.jobTitle.name}
        companyName={x.company.name}
      />
        <JobOverview
        key={"jobOverview" + index}
        distance={x.milesToTravel}
        hourlyRateInCents={x.wagePerHourInCents}
      />

        <Shifts
        key={"shifts"+ index}
        timeArray={x.shifts}
        />

       
        <Location
        key={"location"+ index}
        address={x.company.address.formattedAddress}
        distance={x.milesToTravel}
      />

        <Requirements
          key={"req" + index}
          toolsArray={x.requirements}
        
       />
        
        <ReportTo
             key={"report" + index}
             name={x.company.reportTo.name}
             phone={x.company.reportTo.phone}
        
        />


        <Decision
        key={"decision" + index}
        workerId={workerId}
        jobId={x.jobId}
      />
      </div>
     
     )}
    </div>
  );
}

