import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__image-wrapper">
          <img
            src="/images/product-main.png"
            alt="FocusFrame tabletop display"
            className="hero__image"
          />
        </div>
        <div className="hero__content">
          <p className="hero__tagline">
            Getting your work done while avoiding disturbances has never felt this easier . . .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
