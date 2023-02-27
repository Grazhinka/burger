import { useDispatch } from 'react-redux'
import { addProduct, removeProduct } from '../../store/order/orderSlice';
import style from './count.module.css'


export const Count = ({count,id})=>{
   const dispatch = useDispatch();

   const addCount=()=>{
      dispatch(addProduct({id}))
   }
   const removeCount=()=>{
      dispatch(removeProduct({id}))
   }




    return(
        <div className="count">
          <button onClick={removeCount} className={style.minus}>-</button>
          <p className={style.amount}>{count}</p>
          <button onClick={addCount} className={style.plus}>+</button>
        </div>
    )
}