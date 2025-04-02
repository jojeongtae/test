import { useSelector } from "react-redux";
import { Link} from "react-router-dom";

export default function List() {
    const shopList = useSelector(state => state.shop.shop) ;
    const shopLst = shopList.map((m) => 
    <Link to={`/${m.value}`} key={m.id}>{m.title}&nbsp;</Link>)
//useSelector로 배열끌어온후 map 사용해서 물품 장바구니 합산 생성

    return (
        <>
            {shopLst}
        </>
    );
}
