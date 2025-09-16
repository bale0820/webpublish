import { useState } from "react";
import { HeaderRightButton } from "../base/HeaderRightButton";


export function HeaderRight({datas}) {
    

        const [active, setActive] = useState('');
        const click = (name) => {
            setActive(name);
        };
    return(
        <nav>
        <ul class="header-menu">
            {datas && datas.map((data) => 
                <HeaderRightButton href={data.href} style={active === data.name ? "header-menu-item active": "header-menu-item" } name={data.name} click={click}/>
            )}
        </ul>
        </nav>
    );
}

//  <nav>
//             <ul class="header-menu">
//                 <li><a href="#home" class="header-menu-item active">Home</a></li>
//                 <li><a href="#about" class="header-menu-item">About</a></li>
//                 <li><a href="#skill" class="header-menu-item">Skill</a></li>
//                 <li><a href="#work" class="header-menu-item">My Work</a></li>
//                 <li><a href="#testimonial" class="header-menu-item">Testimonial</a></li>
//                 <li><a href="#contact" class="header-menu-item">Contact</a></li>
//             </ul>
//         </nav>