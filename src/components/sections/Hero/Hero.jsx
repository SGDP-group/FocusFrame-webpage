import Button from '../../common/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          
          
          <h1 className="hero__title">
            Master Your Workflow,<br />
            <span className="hero__title-gradient">Protect Your Peace</span>
          </h1>
          
          <p className="hero__tagline">
            An intelligent focus ecosystem. FocusFrame combines a smart desk companion, 
            a door-mounted availability indicator, and a productivity-boosting app to help 
            you manage distractions and enhance your focus.
          </p>
          
          <div className="hero__actions">
            <Button variant="primary">Pre-Order Your FocusFrame</Button>
            {/* <Button variant="secondary">Watch Demo</Button> */}
          </div>
          
          <div className="hero__stats">
            <div className="hero__stat">
              <div className="hero__stat-value">23min</div>
              <div className="hero__stat-label">Saved per interruption</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-value">Decrease</div>
              <div className="hero__stat-label">Unnecessary Interruptions</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-value">AI-Driven</div>
              <div className="hero__stat-label">Smart scheduling</div>
            </div>
          </div>
        </div>
        
        <div className="hero__image-wrapper">
          <div className="hero__image-float">
            <img
              src="/images/Hero-image.jpg"
              alt="FocusFrame tabletop display"
              className="hero__image"
            />
          </div>
          <div className="hero__glow hero__glow--1"></div>
          <div className="hero__glow hero__glow--2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
