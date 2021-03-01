import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
// !VA 242 It's important to note here how clean the APp component is. With pure React, the App component is responsible for generating all the configuration that is processed by the child components. With Redux, all that configuration is offloaded into Redux, so the App component, i.e. the immediate parent of the children, is no longer responsible for it. Instead, now the PROVIDER is the top-level component and assumes all that responsiblitly for passing data directly into the child components.. 
const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
