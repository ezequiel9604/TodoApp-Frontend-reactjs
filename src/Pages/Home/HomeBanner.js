
function HomeBanner({ title, subtitle }) {
    return (
        <div className="main__section__completed__banner">
            <figure className="main__section__completed__banner__image">
                <i className="bi bi-emoji-wink-fill"></i>
            </figure>
            <span className="main__section__completed__banner__title">{title}.</span>                
            <span className="main__section__completed__banner__subtitle">{subtitle}.</span>
        </div>
    );
}

export default HomeBanner;