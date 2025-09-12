import './css/Menu.css';
import { Menu } from './components/commons/Menu.jsx';
import { MenuList } from './components/menus/MenuList.jsx';
import { useState, useEffect } from "react";
import { fetchData } from "./util/commonData.js";
import { Logo } from './components/commons/Logo.jsx';
export default function App() {
    const [menus, setMenus] = useState({});

    useEffect(() => {
        const fetch = async () => {
            const data = await fetchData("/data/menus.json");
            setMenus(data);
        };
        fetch();
        console.log(menus);
    
    }, []);

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #888", paddingBottom: "20px" }}>
                <MenuList menus={menus.headerLeft} />
                <Logo img="/images/logored.png" alt="header-logo" w="120px" />

                <MenuList menus={menus.headerRight} />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <MenuList menus={menus.headerCenter} />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <MenuList menus={menus.footerTop} />
            </div >
        </div>
    );
}