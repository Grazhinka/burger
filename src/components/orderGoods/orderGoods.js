import { API_URI } from '../../const'
import { Count } from '../count/count'
import style from './orderGoods.module.css'

export const OrderGoods=({title,price,image,id,count,weight})=>(
    <li className={style.item}>
    <img className={style.image} src={`${API_URI}/${image}`} alt={title}/>

    <div className={style.goods}>
      <h3 className={style.title}>{title}</h3>

      <p className={style.weight}>{weight} г</p>

      <p className={style.price}>{price}
        <span className="currency">&nbsp;₽</span>
      </p>
    </div>

<Count count={count} id={id}/>
  </li>
)