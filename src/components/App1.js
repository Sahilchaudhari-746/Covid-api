import { useEffect, useState } from 'react';
import './App1.css';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Coviddata from './Coviddata';
function App1() {
  const [covids, setcovids] = useState([])
  const fetchApiData = () => {
    const url = 'https://api.rootnet.in/covid19-in/stats/latest'
    fetch(url).then(response => {
      return response.json();
    }).then(data => {
      setcovids(data.data.regional)
      console.log(data.data.regional);
    })
  }
  useEffect(() => {
    fetchApiData()
  }, [])
  return (
    
    <div className="d-flex flex-wrap">
      {

        covids.map((covid) => {
          return (
            //<h2>{covid.loc}</h2>

            <Coviddata
              title={covid.loc}
              total={covid.deaths}
              discharge={covid.discharged}
              totalconfirmed={covid.totalConfirmed}
            />

          )
        })
      }
    </div>

  );
}


export default App1;
