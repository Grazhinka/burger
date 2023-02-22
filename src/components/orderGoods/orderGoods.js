import { Count } from '../count/count'
import style from './orderGoods.module.css'

export const OrderGoods=(props)=>(
    <li className={style.item}>
    <img className={style.image} src="img/burger_1.jpg" alt={props.title}/>

    <div className={style.goods}>
      <h3 className={style.title}>{props.title}</h3>

      <p className={style.weight}>512г</p>

      <p className={style.price}>1279
        <span className="currency">₽</span>
      </p>
    </div>

<Count count={5}/>
  </li>
)