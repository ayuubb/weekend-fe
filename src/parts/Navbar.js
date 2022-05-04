import React from 'react';
import IconBrand from 'parts/IconBrand';

export default function Navbar() {
  return (
    <header>
      <div className="container-md">
        <nav className="nav navbar navbar-light">
          <IconBrand />
        </nav>
      </div>
    </header>
  );
}
