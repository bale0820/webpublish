import { HeaderLeft } from "./HeaderLeft";
import { HeaderRight } from "./HeaderRight";

export function Header() {
    const headerData = [
            {
                "href" : "#home",
                "style" : "header-menu-item ",
                "name" : "Home"
            },
             {
                "href" : "#about",
                "style" : "header-menu-item ",
                "name" : "About"
            },
             {
                "href" : "#skill",
                "style" : "header-menu-item ",
                "name" : "Skill"
            },
             {
                "href" : "#work",
                "style" : "header-menu-item ",
                "name" : "Work"
            },
             {
                "href" : "#testimonial",
                "style" : "header-menu-item ",
                "name" : "Testimonial"
            },
             {
                "href" : "#contact",
                "style" : "header-menu-item ",
                "name" : "Contact"
            }
        ];


    return (
        <header class="header">
            <HeaderLeft name="Judy" />
            <HeaderRight datas={headerData} />
        </header>
    );
}


