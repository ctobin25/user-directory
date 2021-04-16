
import { useEffect, useMemo } from 'react';
import './App.css';
import API from "./util/API";

function App() {
    useEffect(() => {
      API.searchEmployee() 
      .then(res => {
       console.log('res',res)
      })
    }, [])



  return (
    <div className="App">
     <h1> user directory </h1>

    </div>
  );
}

export default App;

