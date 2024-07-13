import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Hills Hospital. All rights reserved.</p>
        <p className="text-sm">Designed with care by Hills Hospital Team.</p>
      </div>
    </footer>
  );
}

export default Footer;
