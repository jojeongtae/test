import { useSelector, useDispatch } from "react-redux";
import { updateCartQuantity } from "./shoppingSlice";
export default function MenuCart() {
  const cartItems = useSelector(state => state.shop.cartItems);
  const dispatch = useDispatch();
 
//제 작은두뇌로는 인풋타입넘버를 못건드려서 gpt썻습니다..

  return (
    <>
    <form>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.goods} - {item.price}원
            <button
              type="button"
              onClick={() => {
                dispatch(updateCartQuantity({ id: item.id, quantity: 0 }));
              }}
            >
              Remove
            </button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => {
                const newQuantity = Number(e.target.value);
                dispatch(updateCartQuantity({ id: item.id, quantity: newQuantity }));
              }}
            />
          </li>
        ))}
      </ul>
    </form>
      
    </>
  );
}