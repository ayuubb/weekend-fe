import React from 'react';
import Logo from '../assets/icons/logo.svg';
import Button from 'elements/Button';

export default function IconBrand() {
  return (
    <div className="logo d-flex align-items-center">
      <img src={Logo} alt="logo" />
      <div className="text-logo">
        <p className="text-logo-first">Good Morning</p>
        <p className="text-logo-second font-weight-bold">Fellas</p>
      </div>
    </div>
    // <Button className="brand-icon" href="" type="link">
    // </Button>
  );
}
