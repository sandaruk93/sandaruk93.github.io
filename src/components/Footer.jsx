import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-8">
      <div className="container-custom text-center">
        <p className="text-lg">
          © {currentYear} Sandaru Suranjaya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 