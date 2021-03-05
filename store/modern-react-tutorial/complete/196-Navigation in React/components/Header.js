 import React from 'react';
 import Link from './Link';

 const Header = () => {
  return (
    // !VA 201 In normal links, the elements below would be regular anchor a tags. But using them would cause a page refresh every time they are clicked because that is the default behavior for anchor tags!!!! So we replace the anchors with Link components in which we can more effectively control the anchor behavior to override the default. The href and className are passed down to the Link component as props.
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

