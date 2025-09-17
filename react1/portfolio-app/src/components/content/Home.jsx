import { AvatarImage } from "../base/Avatar";

export function Home({data}) {
    const {img, name, title, description} = data;
    return(
        <section id="home">
            <AvatarImage style="home-avatar" img={img} msg="home photo" />
            <h2 className="home-title">
                Hello <br /> 
                I'm <strong className="home-title strong">{title}</strong>, {name}
            </h2>
            <p className="home-description">{description}</p>
            <a className="home-contact" href="#">contact me</a>
        </section>
    );
}