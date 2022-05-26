import './App.css';
import { useEffect,useState } from 'react';
import {Header} from "../src/Components/header";
import {Router} from "../src/Components/router";

function App() {

const workerId = "7f90df6e-b832-44e2-b624-3143d428001f";

// const [jobTitle,setJobTitle] = useState({});
// const [company,setCompany] = useState({});
//const [wageInCents,setWageInCents] = useState(0);  
const [workerName, setWorkerName] = useState(""); 
useEffect(
  () => {
    const fetchedData = async () => {
    
      const response = await
       fetch(`https://test.swipejobs.com/api/worker/${workerId}/profile`);
      
       const data = await response.json();
       setWorkerName(data.firstName + ` ` + data.lastName);   

    };
  
    fetchedData()
      .catch(console.error);
  }, []);
  

  return (
    <div className="App">
      <Header fullName={workerName}/>
      <Router workerId={workerId} />
    </div>
  );
}

export default App;
