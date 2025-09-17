import { Img } from "../base/Img";

export function HeaderLeft({name}) {
    return(
         <div class="header-logo">
            <Img src="images/favicon.ico" alt="header logo" style="header-logo-img"/>
            <h1 class="header-logo-title">{name}</h1>
        </div>
    );
}
