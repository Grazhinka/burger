import { CatalogProduct } from "../catalogProduct/catalogProduct";
import { Container } from "../container/container"
import { Order } from "../order/order"
import style from './catalog.module.css'

const goodsList = [
  { title: 'Мясная бомба' },
  { title: 'Супер сырный' },
  { title: 'Сытный' },
  { title: 'Итальянский' },
  { title: 'Вечная классика' },
  { title: 'Тяжелый удар' },
];

export const Catalog = ()=>{


    return(
        <section className={style.catalog}>
      <Container className={style.container}>
           <Order/>
        <div className={style.wrapper}>
          <h2 className={style.title}>Бургеры</h2>

          <div className={style.wrap_list}>
            <ul className={style.list}>
                {goodsList.map((item,index)=>(
                  <li key={index} className={style.item}>
                    <CatalogProduct title={item.title}/>
                  </li>
                ))}
              
            </ul>
          </div>
        </div>
        
      </Container>
    </section>
    )
}