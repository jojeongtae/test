import { useSelector } from "react-redux";

export default function Payment() {
  const cartItems = useSelector((state) => state.shop.cartItems);

  let result = 0;
  cartItems.forEach(item => {
    result += item.price * item.quantity;
  });
//forEach문 돌려서 배열을 처음부터 탐색후 배열안에 있는 price와 quantity를 찾고 곱한 값을 result에 더함
  return (
    <div>
      <h1>Total</h1>
      <p>{result}원</p>
    </div>
  );
}
