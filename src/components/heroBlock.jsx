import React from 'react';

const HeroBlock = () => {
    return ( 
        <section className="block block--dark block--skewed-left hero">
        <div className="container grid grid--1x2">
          <header className="block__header hero__content">
            <h1 data-aos="zoom-in-up" className="block__heading">
              Go Online TODAY
            </h1>
            <p className="hero__tagline">
              Design, Develop, Deploy, and Maintain your app by industry export engineers.
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
              srcset="images/banner.webp 1x, images/banner@2x.webp 2x"
            />
            <source
              type="image/png"
              srcset="images/banner.png 1x, images/banner@2x.png 2x"
            />
            <img className="hero__image" src="images/banner.png" alt="" />
          </picture>
        </div>
      </section>
     );
}
 
export default HeroBlock;