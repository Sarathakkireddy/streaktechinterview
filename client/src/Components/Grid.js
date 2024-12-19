import React from 'react'
import SelectableCell from './SelectableCell';
import '../styles/Grid.css'
function Grid({SetStart,start,end,Setend}) {
    let grid=new Array();
    let arr= new Array();
    for(let i=0;i<20;i++){
        arr.push(0);
    }
    for(let i=0;i<20;i++){
        grid.push(arr);
    }
    
  return (
    <div className='gridsubcont'>
        {grid.map((g,idx)=>{return grid[idx].map((y,idy)=>{return <SelectableCell start={start} SetStart={SetStart} end={end} Setend={Setend} idx={idx} idy={idy} g={g}/> })})}
    </div>
  )
}

export default Grid
