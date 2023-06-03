const Service = () => {
    return ( 
        <section className="block container">
            <header className="block__header">
                <h2>Host on the Cloud to Keep Growing</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
                voluptatem.
                </p>
            </header>

            <article className="grid grid--1x2 feature">
                <div className="feature__content" data-aos="fade-right">
                <span className="icon-container">
                    <svg className="icon icon--primary">
                    <use href="../images/sprite.svg#easy"></use>
                    </svg>
                </span>
                <h3 className="feature__heading">Super Easy to Use</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                    obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
                </p>
                <a href="https://bitlify.com" target="_blank" className="link-arrow"
                    >Learn More</a
                >
                </div>
                <picture data-aos="zoom-in-left">
                <source
                    type="image/webp"
                    srcset="images/easy.webp 1x, images/easy@2x.webp 2x"
                />
                <source
                    type="image/jpg"
                    srcset="images/easy.jpg 1x, images/easy@2x.jpg 2x"
                />
                <img className="feature__image" src="../images/easy@2x.jpg" alt="" />
                </picture>
            </article>

            <article className="grid grid--1x2 feature">
                <div className="feature__content" data-aos="fade-up">
                <span className="icon-container">
                    <svg className="icon icon--primary">
                    <use href="images/sprite.svg#computer"></use>
                    </svg>
                </span>
                <h3 className="feature__heading">Simply Fast Websites</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                    obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
                </p>
                <a href="https://bitlify.com" target="_blank" className="link-arrow"
                    >Learn More</a
                >
                </div>
                <picture>
                <source
                    type="image/webp"
                    srcset="images/fast.webp 1x, images/fast@2x.webp 2x"
                />
                <source
                    type="image/jpg"
                    srcset="images/fast.jpg 1x, images/fast@2x.jpg 2x"
                />
                <img className="feature__image" src="images/fast@2x.jpg" alt="" />
                </picture>
            </article>

            <article className="grid grid--1x2 feature">
                <div className="feature__content" data-aos="fade-up">
                <span className="icon-container">
                    <svg className="icon icon--primary">
                    <use href="images/sprite.svg#wordpress"></use>
                    </svg>
                </span>
                <h3 className="feature__heading">Wordpress Made Easy</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                    obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
                </p>
                <a href="https://bitlify.com" target="_blank" className="link-arrow"
                    >Learn More</a
                >
                </div>
                <picture>
                <source
                    type="image/webp"
                    srcset="images/wordpress.webp 1x, images/wordpress@2x.webp 2x"
                />
                <source
                    type="image/jpg"
                    srcset="images/wordpress.jpg 1x, images/wordpress@2x.jpg 2x"
                />
                <img className="feature__image" src="images/wordpress@2x.jpg" alt="" />
                </picture>
            </article>

            <article className="grid grid--1x2 feature">
                <div className="feature__content" data-aos="fade-left">
                <span className="icon-container">
                    <svg className="icon icon--primary">
                    <use href="images/sprite.svg#clock"></use>
                    </svg>
                </span>
                <h3 className="feature__heading">24/7 Expert Support</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                    obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
                </p>
                <a href="https://bitlify.com" target="_blank" className="link-arrow"
                    >Learn More</a
                >
                </div>
                <picture data-aos="fade-right">
                <source
                    type="image/webp"
                    srcset="images/support.webp 1x, images/support@2x.webp 2x"
                />
                <source
                    type="image/jpg"
                    srcset="images/support.jpg 1x, images/support@2x.jpg 2x"
                />
                <img className="feature__image" src="images/support@2x.jpg" alt="" />
                </picture>
            </article>
    </section>
     );
}
 
export default Service;