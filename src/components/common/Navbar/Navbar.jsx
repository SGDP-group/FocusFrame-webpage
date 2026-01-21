import './Navbar.css';

const Navbar = () => {
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Buy Now', href: '#buy' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="/" className="navbar__logo">
          FocusFrame
        </a>
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label} className="navbar__item">
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
