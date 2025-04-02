import { Outlet } from "react-router-dom";
import Headers from "./Headers";
import List from "./List";

export default function MainLayout(){

const title = "Shopping"
    return(
        <>
        <Headers title={title}></Headers>
        <List />
        <Outlet />
        </>
    );
}