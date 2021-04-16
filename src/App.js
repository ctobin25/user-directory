
import { useEffect, useState } from 'react';
import './App.css';
import API from "./util/API";

function App() {

  const [employeeState, setEmployeeState] = useState([])


    useEffect(() => {
      API.searchEmployee() 
      .then(res => {
       console.log('res',res)
       setEmployeeState(res.data.results)

      })
    }, [])

    console.log(employeeState)



  return (
    <div className="App">
     <h1> user directory </h1>
        {employeeState.map(employee => {
          return(
            <>
                     <p>{employee.name.first}</p>
          <p>{employee.name.last}</p>
            </>
          )
        })}
    </div>
  );
}

export default App;

