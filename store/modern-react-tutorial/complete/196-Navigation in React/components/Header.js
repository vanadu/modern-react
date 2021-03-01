 import React from 'react';
 import Link from './Link';

 const Header = () => {
  return (
    // !VA 201 Replace with link components
    <div className="ui secondary pointing menu">

      <Link href="/" className="item">
        Accordion
      </Link>
      <Link href="/list" className="item">
        Search
      </Link>
      <Link href="/dropdown" className="item">
        Dropdown
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
    </div>
  );
 };

 export default Header;

