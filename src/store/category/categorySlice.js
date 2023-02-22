import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: [
      { title: 'burger', rus: 'Бургеры', image: '/img/burger.png' },
      { title: 'snack', rus: 'Закуски', image: '/img/snack.png' },
      { title: 'hot-dog', rus: 'Хот-доги', image: '/img/hot-dog.png' },
      { title: 'combo', rus: 'Комбо', image: '/img/combo.png' },
      { title: 'shawarma', rus: 'Шаурма', image: '/img/shawarma.png' },
      { title: 'pizza', rus: 'Пицца', image: '/img/pizza.png' },
      { title: 'wok', rus: 'Вок', image: '/img/wok.png' },
      { title: 'dessert', rus: 'Десерты', image: '/img/dessert.png' },
      { title: 'sauce', rus: 'Соусы', image: '/img/sauce.png' },
    ],
    error: '',
    activeCategory: 0,
  };

const categorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{
        changeCategory(state,action){
            state.activeCategory = action.payload.indexCategory
        }
    }
});

export const {changeCategory}= categorySlice.actions;

export default categorySlice.reducer;