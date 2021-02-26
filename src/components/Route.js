// !VA 198 Don't need the import since we're not writing out any JSX
// import React, { useEffect, useState } from 'react';
// !VA 203 Only import useState, not React
import { useEffect, useState} from 'react';

const Route = ({ path, children}) => {
  const [currentPath,setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {

    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return() => {
      window.removeEventListener('popstate', onLocationChange);
    }

  },  []);

  return currentPath === path 
    ? children 
    : null;
}

export default Route;