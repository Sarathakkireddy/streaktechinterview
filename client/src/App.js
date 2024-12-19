
import Grid from './Components/Grid';
import './index.css'
import './App.css'
import { useState } from 'react';
import {Axios } from 'axios';

function App() {
  const [start,SetStart]=useState({x:"",y:""})
  const [end,Setend]=useState({x:"",y:""})
  return (
   <div className='container'>
      <div className='grid-container'>
        <Grid start={start} SetStart={SetStart} end={end} Setend={Setend}/>
      </div>
      <div>
        <button onClick={()=>{
          let  res=Axios.post(URL="http://localhost:4000/find-path",Data={start,end});
         if( res.Status==200){
          console.log(res);
         }
        }}>Find the Shortest path</button>
      </div>
   </div>
  );
}

export default App;
