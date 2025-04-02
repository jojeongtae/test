import { useSelector } from "react-redux";
import { Link} from "react-router-dom";

export default function List() {
    const shopList = useSelector(state => state.shop.shop) ;
    const shopLst = shopList.map((m) => 
    <Link to={`/${m.value}`} key={m.id}>{m.title}&nbsp;</Link>)


    return (
        <>
            {shopLst}
        </>
    );
}