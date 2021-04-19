
import { useEffect, useState } from 'react';
import "./App.css";
import API from "./util/API";
import TableArea from "./components/tablearea";
import PageHeaderComponent from './components/pageheader/pageHeaderComponent';
import TableHeader from './components/tableheader';

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
      {/* <PageHeaderComponent /> */}
     {/* <h1> user directory </h1> */}
     {/* <TableHeader /> */}
        {/* {employeeState.map(employee => {
          return(
            <>
            <p>{employee.name.first}</p>
           <p>{employee.name.last}</p>
            </>
          )
        })} */}

        <TableArea />
    </div>
  );
}

export default App;

