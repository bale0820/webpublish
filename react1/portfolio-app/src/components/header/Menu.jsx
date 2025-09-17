
export function Menu({href, style, name, click}) {
    const handleMenuClick = () =>{
        click(name);
    }

    return(
        <a href={href} className={style} onClick={() =>{click(name)}}>{name}</a>
    );
}