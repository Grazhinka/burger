import './order.css'
import './goods.css'
import './count.css'

export const Order=()=>{

    return(
        <div className="catalog__order order">
          <section className="order__wrapper">
            <div className="order__header" tabindex="0" role="button">
              <h2 className="order__title">Корзина</h2>

              <span className="order__count">4</span>
            </div>

            <div className="order__wrap_list">
              <ul className="order__list">
                <li className="order__item">
                  <img className="order__image" src="img/burger_1.jpg" alt="Супер сырный"/>

                  <div className="order__goods goods">
                    <h3 className="goods__title">Супер сырный</h3>

                    <p className="goods__weight">512г</p>

                    <p className="goods__price">1279
                      <span className="currency">₽</span>
                    </p>
                  </div>

                  <div className="count">
                    <button className="count__minus">-</button>
                    <p className="count__amount">1</p>
                    <button className="count__plus">+</button>
                  </div>
                </li>

                <li className="order__item">
                  <img className="order__image" src="img/free_1.jpg" alt="Картошка фри"/>

                  <div className="order__goods goods">
                    <h3 className="goods__title">Картошка фри</h3>

                    <p className="goods__weight">180г</p>

                    <p className="goods__price">245
                      <span className="currency">₽</span>
                    </p>
                  </div>

                  <div className="count">
                    <button className="count__minus">-</button>
                    <p className="count__amount">2</p>
                    <button className="count__plus">+</button>
                  </div>
                </li>

                <li className="order__item">
                  <img className="order__image" src="img/hot-dog_1.jpg" alt="Жгучий хот-дог"/>

                  <div className="order__goods goods">
                    <h3 className="goods__title">Жгучий хот-дог</h3>

                    <p className="goods__weight">245г</p>

                    <p className="goods__price">239
                      <span className="currency">₽</span>
                    </p>
                  </div>

                  <div className="count">
                    <button className="count__minus">-</button>
                    <p className="count__amount">1</p>
                    <button className="count__plus">+</button>
                  </div>
                </li>
              </ul>

              <div className="order__total">
                <p>Итого</p>
                <p>
                  <span className="order__amount">1279</span>
                  <span className="currency">₽</span>
                </p>
              </div>

              <button className="order__submit">Оформить заказ</button>

              <div className="order__apeal">
                <p className="order__text">Бесплатная доставка</p>
                <button className="order__close">Свернуть</button>
              </div>
            </div>
          </section>
        </div>
    )
}