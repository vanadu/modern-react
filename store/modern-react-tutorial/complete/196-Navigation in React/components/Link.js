import React from 'react';

// !VA Create a link component with these props, which are passed through from the Header component. 
const Link = ({ className, href, children }) => {
  // !VA 205 Handles the rightclick 
  const onClick = (event) => {
    // !VA If the user is holding down a meta or ctrl, then return out, don't run any of the subsequent code, and let the browser do the default task, i.e. the rightclick funcitonality.
    if (event.metaKey || event.ctrlKey ) {
      return;
    }

    // !VA Overrides the default anchor behavior so the page does not refresh.
    event.preventDefault();
    // !VA Update the current URL with the value of the href prop, i.e. /, /translate, /dropdown etc
    window.history.pushState( {}, '', href);

     const navEvent = new PopStateEvent('popstate');
     window.dispatchEvent(navEvent);
  };

  // !VA Here we create the onClick event that will initiate the Navigation event. This JSX is returned and rendered within the Link tag in the Header component
  return <a onClick={onClick} className={className} href={href}>
      {children}
    </a>;
}; 

export default Link; 