import { useState } from 'react'
import style from './count.module.css'


export const Count = (props)=>{
   const [count,setCount]=useState(props.count)
   const addCount=()=>{
    setCount(count+1);
   }
   const removeCount=()=>{
    if(count>1){
    setCount(count-1);
    }
   }




    return(
        <div className="count">
          <button onClick={removeCount} className={style.minus} disabled={count===1}>-</button>
          <p className={style.amount}>{count}</p>
          <button onClick={addCount} className={style.plus}>+</button>
        </div>
    )
}