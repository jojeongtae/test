import { useDispatch, useSelector } from "react-redux";
import { addMenu } from "./shoppingSlice";

export default function ShopList() {
    const shopList = useSelector(state => state.shop.shop);
    const dispatch = useDispatch();
    const menuList = shopList.map((shop) =>
        (<li key={shop.id}>{`${shop.goods}-${shop.price}원`}
            <button type="button" onClick={(e) => {
                dispatch(addMenu(shop))
                alert("상품이 추가되었습니다.")
            }}>Add to cart</button>
        </li>
        ));



    return (
        <>
            <form>
                <ul>
                    {menuList}
                </ul>
            </form>
        </>
    );
}