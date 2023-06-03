interface Props {
    items: {name: string, ref: string}[]
}
const Menu = ({items = []}: Props) => {
    return ( 
        <ul className="list nav__list collapsible__content">
                {items.map((item, index) => <li key={index} className="nav__item"><a href="#" target="_black">{item.name}</a></li>)}
        </ul>
     );
}
 
export default Menu;