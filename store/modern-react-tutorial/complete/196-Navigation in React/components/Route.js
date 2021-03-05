// !VA 198 Only import the hooks being used, not the React object because wee're not outputting any JSX here.
import { useEffect, useState} from 'react';

const Route = ({ path, children}) => {
  // !VA 204 This is where we set a piece of state to update the Route component whenever the pathname changes. So, when the eventListener is fired and onLocation is run, setCurrentPath triggers a change of state, i.e. the currentPath is updated with the path of the selected link, then the component is automatically rerendered. That's the function of this piece of state - to initiate the rerender and track what the current pathname is..
  const [currentPath,setCurrentPath] = useState(window.location.pathname);
  // !VA  203 We have to use useEffect whenever we wire up eventHandlers manually inside a component, i.e. not one of the default event handlers provided by React as props

  useEffect(() => {

    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // !VA 203 Listens for a popstate event and runs the onLocationChange function, defined above
    window.addEventListener('popstate', onLocationChange);

    // !VA 203 This is the cleanup function innate to useEffect. Remember, it's the only function useEffect can return and it's used to unbind eventListeners, setTimeouts and other events than require cancelling after they have been invoked. So, remove the eventListener
    return() => {
      window.removeEventListener('popstate', onLocationChange);
    }
 
    // !VA 203 Empty array indicates that useEffect is only run when this component is first rendered to the screen
  },  []);

  // !VA 204 Now that setCurrentPath has cause the component to rerender, if the currentPath i.e. the href of the selected Link component equals the current URL, then return the children... I don't get this...otherwise return null so no action takes place.
  return currentPath === path 
    ? children 
    : null;
}

export default Route;