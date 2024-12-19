import React from 'react'
import '../styles/Selectcell.css'

function SelectableCell({idx,idy,g,SetStart,start,end,Setend}) {
  return (
    <span id='selcell' className={idx===start.x&&idy===start.y?"startpoint":idx===end.x&&idy===end.y?"endpoint":"normal"} onClick={()=>{
        if(start.x===""&&start.y===""){
            SetStart({x:idx,y:idy});
        }else if(end.x===""&&end.y===""){
            Setend({x:idx,y:idy});
        }else {
            SetStart({x:idx,y:idy});
            Setend({x:"",y:""});
        }
    }}>
        {idx} {idy}
    </span>
  )
}

export default SelectableCell
