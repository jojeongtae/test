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
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },
    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);
      if (existingItem) {
        if (quantity > 0) {
          existingItem.quantity = quantity;
        } else {
          // 수량을 0으로 설정하면 제거합니다.
          state.cartItems = state.cartItems.filter(item => item.id !== id);
        }
      }
    }
  }
});

export const { addMenu,updateCartQuantity } = shoppingSlice.actions;
export default shoppingSlice;
