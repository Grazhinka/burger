import style from './order.module.css'
import { OrderGoods } from '../orderGoods/orderGoods'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { orderRequestAsync } from '../../store/order/orderSlice'

const orderList=[
  'Супер сырный', 'Картошка Фри ','Жгучий хотдог'
]

export const Order=()=>{
    const {totalPrice, totalCount}=useSelector(state=>state.order)
    const dispatch=useDispatch()


    useEffect(()=>{
      dispatch(orderRequestAsync)
    },[])

    return(
        <div className="order">
          <section className={style.wrapper}>
            <div className={style.header} tabIndex="0" role="button">
              <h2 className={style.title}>Корзина</h2>

              <span className={style.count}>{totalCount}</span>
            </div>

            <div className={style.wrap_list}>
              <ul className={style.list}>
              {orderList.map((item,index)=> <OrderGoods key={index} title={item}/>)
              }
              </ul>

              <div className={style.total}>
                <p>Итого</p>
                <p>
                  <span className={style.amount}>{totalPrice}</span>
                  <span className="currency"> ₽</span>
                </p>
              </div>

              <button className={style.submit}>Оформить заказ</button>

              <div className={style.apeal}>
                <p className={style.text}>Бесплатная доставка</p>
                <button className={style.close}>Свернуть</button>
              </div>
            </div>
          </section>
        </div>
    )
}