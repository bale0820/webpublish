import { Img } from "../base/Img";
import { Title } from "../base/Title";

export function Home() {
    return(
        <section id="home">
            <Img style="home-avatar" src="images/favicon.ico" alt="photo"/>
            <Title />
        </section>
    );
}
