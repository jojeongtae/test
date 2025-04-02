import { useSelector } from "react-redux";

export default function Payment() {
  const cartItems = useSelector((state) => state.shop?.cartItems) || [];

  let result = 0;
  cartItems.forEach(item => {
    result += item.price * item.quantity;
  });

  return (
    <div>
      <h1>Total</h1>
      <p>{result}원</p>
    </div>
  );
}
