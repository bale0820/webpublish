
export function HeaderRightButton({href, style, name, click}) {
    return(
        <li><a href={href} className={style} onClick={() => click(name)}>{name}</a></li>
    );
}