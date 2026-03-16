import React from 'react';

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="logo">🌿 TobaccoMaster</div>
        <nav className="nav-links">
          <a onClick={() => scrollTo('hero')}>Home</a>
          <a onClick={() => scrollTo('product')}>Machine</a>
          <a onClick={() => scrollTo('features')}>Machine Parts</a>
          <a onClick={() => scrollTo('repairing')}>Repairing</a>
          <a className="btn-nav" onClick={() => scrollTo('contact')}>📞 Contact Us</a>
        </nav>
      </div>
    </header>
  );
}
