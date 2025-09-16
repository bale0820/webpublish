import { useState } from "react";
import { Menu } from "./Menu.jsx";

export function MenuList() {
    const menus = [
        {"href" : "#home", "style" : "header-menu-item active", "name" : "Home"},
        {"href" : "#about", "style" : "header-menu-item", "name" : "About"},
        {"href" : "#skill", "style" : "header-menu-item", "name" : "Skill"},
        {"href" : "#work", "style" : "header-menu-item", "name" : "My Work"},
        {"href" : "#testimonial", "style" : "header-menu-item", "name" : "Testimonial"},
        {"href" : "#contact", "style" : "header-menu-item", "name" : "Contact"}
    ];

    const [active, setActive] = useState('');
    const handleClick =(name)=> {
        setActive(name);
    }; //자식에게 전송하는 props 이벤트 핸들러 함수
        return(
             <nav>
                <ul className="header-menu">
                  {menus &&  menus.map((menu) => 
                    <li><Menu href={menu.href} style={active === menu.name? "header-menu-item active" : "header-menu-item"} name={menu.name} click={handleClick} /> </li>
                  )}
                </ul>
            </nav>
        );
}