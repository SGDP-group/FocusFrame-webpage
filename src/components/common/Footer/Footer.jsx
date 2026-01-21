import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <h3 className="footer__logo">FocusFrame</h3>
            <p className="footer__tagline">Master Your Workflow, Protect Your Peace</p>
          </div>
          
          <div className="footer__links">
            <div className="footer__column">
              <h4 className="footer__heading">Product</h4>
              <ul className="footer__list">
                <li><a href="#problem">Problem</a></li>
                <li><a href="#solution">Solution</a></li>
                <li><a href="#features">Features</a></li>
              </ul>
            </div>
            
            <div className="footer__column">
              <h4 className="footer__heading">Company</h4>
              <ul className="footer__list">
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">&copy; 2026 FocusFrame. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
