import FooterItem from "./FooterItem";

const Footer = () => {
    const product = [
        {refs:'#', label: 'Design'},
        {refs:'#', label: 'Development'},
        {refs:'#', label: 'Hosting'},
        {refs:'#', label: 'Migrations'},
    ];
    const company = [
        {refs:'#', label: 'About'},
        {refs:'#', label: 'Privacy'},
        {refs:'#', label: 'Terms and Policies'}
    ];
    const support = [
        {refs:'#', label: 'Contact Us'},
        {refs:'#', label: 'FAQ'},
        {refs:'#', label: 'Career'}
    ];
    const domain = [
        {refs:'#', label: 'Domain Checker'},
        {refs:'#', label: 'Domain Transfer'},
        {refs:'#', label: 'Free Domain'}
    ];

    const followUs = [
        {refs: 'https://www.facebook.com/profile.php?id=100093152958647', label: 'Facebook', target: "_blank"},
        {refs: 'https://tiktok.com/@bitlify', label: 'TikTok', target: '_blank'},
        {refs: 'https://www.facebook.com/profile.php?id=100093152958647', label: 'InstaGram', target: "_blank"},
    ];
    return ( 
        <footer className="block block--dark footer">
            <div className="container grid footer__sections">
                <FooterItem title="Products" icon="chevron" content={product} expanded={true} />
                <FooterItem title="Company" icon="chevron" content={company} />
                <FooterItem title="Support" icon="chevron" content={support} />
                <FooterItem title="Domain" icon="chevron" content={domain} />
                <FooterItem title="Follow Us" icon="chevron" content={followUs} />
          
                <section className="collapsible__footer footer__brand">
                    <img src="icons/bitlify.png" alt="Logo" />
                    <p className="footer__copyright">Copyright &copy; Bitlify</p>
                </section>
            </div>
        </footer>

     );
}
 
export default Footer;