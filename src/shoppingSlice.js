import { createSlice } from "@reduxjs/toolkit";

const shopList = [
  { id: 1, title: "상품보기", price: 100, value: "product", goods: "productA" },
  { id: 2, title: "장바구니", price: 200, value: "shopping_cart", goods: "productB" },
  { id: 3, title: "결제금액 보기", price: 300, value: "payment", goods: "productC" }
];

const initialState = {
  shop: shopList,
  count: 0,
  cartItems: [] 
};

const shoppingSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addMenu: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(item => item.id === product.id);
      if (existingItem) { //existingItem이 true면 if 실행
        existingItem.quantity += 1; 
      } else { 
        state.cartItems.push({ ...product, quantity: 1 }); //아니면 기본값 1고정 배열 재배치
      }
    },
    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);
      if (existingItem) {
        if (quantity > 0) { 
          existingItem.quantity = quantity; //기본값이 0보다 크면 기본값수정
        } else {
        
          state.cartItems = state.cartItems.filter(item => item.id !== id); //0보다 작으면 삭제
        }
      }
    }
  }
});

export const { addMenu,updateCartQuantity } = shoppingSlice.actions;
export default shoppingSlice;
