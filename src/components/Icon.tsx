interface Props {
    name: string;
    refs: string;
    color?: string;
    circle?: boolean
}

const Icon = ({refs, color='primary', circle=false}: Props) => {
    const style = `icon icon--${color}`;
    const icon = <svg className={style}>
                    <use href={refs}></use>
                </svg>;

   return circle ? <span className="icon-container">{icon}</span> : icon;
}
 
export default Icon;