import React from "react";
import { Decision, JobHeader, JobOverview } from "./BodyComponenets";

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
    <div>
      <JobHeader
        imageUrl={jobsArray[index]?.jobTitle.imageUrl}
        jobTitle={jobsArray[index]?.jobTitle.name}
        companyName={jobsArray[index]?.company.name}
      />
      <JobOverview 
        distance={jobsArray[index]?.milesToTravel}
        hourlyRateInCents={jobsArray[index]?.wagePerHourInCents}
      />
      <Decision />
    </div>
  );
}
