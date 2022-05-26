import './App.css';
import { useEffect,useState } from 'react';

function App() {

const workerId = "7f90df6e-b832-44e2-b624-3143d428001f";

// const [jobTitle,setJobTitle] = useState({});
// const [company,setCompany] = useState({});
const [wageInCents,setWageInCents] = useState(0);  
const [workerName, setWorkerName] = useState(""); 

useEffect(
  () => {
    const fetchedData = async () => {
    
      const response = await
       fetch(`https://test.swipejobs.com/api/worker/${workerId}/profile`);
      
       const data = await response.json();

       const fullName = data.firstName + " " + data.lastName;

       setWorkerName(fullName);
   

    };
  
    fetchedData()
      .catch(console.error);
  }, []);
  

  return (
    <div className="App">
      <p>Test</p>
      <p>{workerName}</p>
    </div>
  );
}

export default App;
