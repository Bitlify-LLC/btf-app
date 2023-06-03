const Footer = () => {
    return ( 
        <footer className="block block--dark footer">
            <div className="container grid footer__sections">
                <section className="collapsible collapsible--expanded footer__section">
                <div className="collapsible__header">
                    <h2 className="collapsible__heading footer__heading">Products</h2>
                    <svg className="icon icon--white collapsible__chevron">
                    <use href="images/sprite.svg#chevron"></use>
                    </svg>
                </div>
                <div className="collapsible__content">
                    <ul className="list">
                    <li><a href="https://bitlify.com">Website Hosting</a></li>
                    <li><a href="https://bitlify.com">Free Automated Wordpress</a></li>
                    <li><a href="https://bitlify.com">Migrations</a></li>
                    </ul>
                </div>
                </section>
                <section className="collapsible footer__section">
                <div className="collapsible__header">
                    <h2 className="collapsible__heading footer__heading">Company</h2>
                    <svg className="icon icon--white collapsible__chevron">
                    <use href="images/sprite.svg#chevron"></use>
                    </svg>
                </div>
                <div className="collapsible__content">
                    <ul className="list">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Affiliates</a></li>
                    <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                </section>
                <section className="collapsible footer__section">
                <div className="collapsible__header">
                    <h2 className="collapsible__heading footer__heading">Support</h2>
                    <svg className="icon icon--white collapsible__chevron">
                    <use href="images/sprite.svg#chevron"></use>
                    </svg>
                </div>
                <div className="collapsible__content">
                    <ul className="list">
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Knowledge Base</a></li>
                    <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                </section>
                <section className="collapsible footer__section">
                <div className="collapsible__header">
                    <h2 className="collapsible__heading footer__heading">Domains</h2>
                    <svg className="icon icon--white collapsible__chevron">
                    <use href="images/sprite.svg#chevron"></use>
                    </svg>
                </div>
                <div className="collapsible__content">
                    <ul className="list">
                    <li><a href="#">Domain Checker</a></li>
                    <li><a href="#">Domain Transfer</a></li>
                    <li><a href="#">Free Domain</a></li>
                    </ul>
                </div>
                </section>
                <div className="footer__brand">
                <img src="icons/bitlify.png" alt="" />
                <p className="footer__copyright">Copyright &copy; 2023 Bitlify</p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;