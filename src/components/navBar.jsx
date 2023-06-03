const NavBar = () => {

    return ( 
        <nav className="nav collapsible">
          <a aria-label="Bitlify" className="nav__brand" href="/">
            <img src="icons/bitlify.png" alt="Logo" />
          </a>
          <svg className="icon icon--white nav__toggler">
            <use href="images/sprite.svg#menu"></use>
          </svg>
          <ul className="list nav__list collapsible__content">
            <li className="nav__item">
              <a target="#" href="https://bitlify.com">
                Hosting
              </a>
            </li>
            <li className="nav__item">
              <a target="#" href="https://bitlify.com">
                VPS
              </a>
            </li>
            <li className="nav__item">
              <a href="#domain_block">Domain</a>
            </li>
            <li className="nav__item">
              <a target="#" href="https://bitlify.com">
                Pricing
              </a>
            </li>
          </ul>
        </nav>
     );
}
 
export default NavBar;