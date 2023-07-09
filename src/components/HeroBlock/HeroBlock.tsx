import "./HeroBlock.css";

const HeroBlock = () => {
  return (
    <section className="block block--dark block--skewed-left hero">
      <div className="container grid grid--1x2">
        <header className="block__header hero__content">
          <h1 data-aos="zoom-in-up" className="block__heading">
            SOFTWARE DEVELOPMENT
          </h1>
          <p className="hero__tagline">
            We design, develop, and maintain application for your business.
          </p>
          <a
            target=""
            href="http://bitlify.com"
            className="btn btn--accent btn--stretched"
          >
            Get Started
          </a>
        </header>
        <picture data-aos="zoom-in">
          <source
            type="image/webp"
            srcSet="images/banner.webp 1x, images/banner@2x.webp 2x"
          />
          <source
            type="image/png"
            srcSet="images/banner.png 1x, images/banner@2x.png 2x"
          />
          <img className="hero__image" src="images/banner.png" alt="" />
        </picture>
      </div>
    </section>
  );
};

export default HeroBlock;
