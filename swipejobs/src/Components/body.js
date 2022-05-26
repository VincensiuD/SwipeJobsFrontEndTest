import React from "react";
import { Decision, JobHeader, JobOverview, Location } from "./BodyComponenets";

export function Body({ workerId }) {
  const [jobsArray, setJobsArray] = React.useState([]);
  const [jobsAmount, setJobsAmount] = React.useState(0);

  React.useEffect(() => {
    const fetchedData = async () => {
      const response = await fetch(
        `https://test.swipejobs.com/api/worker/${workerId}/matches`
      );
      const data = await response.json();
      setJobsArray(data);
      setJobsAmount(data.length);
    };
    fetchedData().catch(console.error).then(console.log(jobsArray));
  }, []);

  let index = 0;

  return (
    <div style={{margin:20}}>
     {jobsArray.map((x,key)=>
     <div style={{margin:10}}>
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
       
        <Location
        key={"location"+ index}
        address={x.company.address.formattedAddress}
        distance={x.milesToTravel}
      />

        <Decision
        key={"decision" + index}
      />
      </div>
     
     )}
    </div>
  );
}


{/* <JobHeader
imageUrl={x.jobTitle.imageUrl}
jobTitle={x.jobTitle.name}
companyName={x.company.name}
/>
<JobOverview
distance={x.milesToTravel}
hourlyRateInCents={x.wagePerHourInCents}
/>
<Location
address={x}
/>
<Decision /> */}