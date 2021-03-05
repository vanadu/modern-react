import React, { useState, useEffect } from 'react';
import axios from 'axios';

// !VA 158 I don't understand why I'm still getting that key prop error don't understand

const Search = () => {
  // !VA 157 Include a useState value to use as a default search term, see below.
  // const [term, setTerm] = useState('programming');
  // !VA 162 Restoring this to an empty string for this lesson
  const [term, setTerm] = useState('');
    // !VA 157 
  const [results, setResults] = useState(['']);
  // !VA 157
  // console.log(results);

    // !VA 153 This demonstrates the useEffect arguments below
    // console.log('I RUN WITH EVERY RENDER');
    // !VA 153 What does the second argument on useEffect mean? 1) [] = Run once at initial render 2) ...nothing... = Run at initial render and after every rerender 3) [data] = Run at initial render and run after every rerender if data has changed since last rerender.
    // useEffect(() => {
    //   console.log('I RUN AFTER REVERY RENDER AND AT INITIAL RENDEER ');
    // }, [term]);

    // !VA 155 Run useEffect any time term changes. useEffect CANNOT use async/await directly inside the useEffect function! There are three possible solutions: 1) make a helper function and use async/await with that. This is the recommended approach 2) run the async/await call as an IIFE 3) use regular Promises with a then. We will use approach 1)
      useEffect(() => {
        const search = async () => {
          // !VA 157 add  'const {data} ='. That is the data returned from the get call
          const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
              action: 'query',
              list: 'search',
              origin: '*',
              format: 'json',
              srsearch: term,
            } 
          });
          // !VA 157 
          setResults(data.query.search);
        };
        // !VA 157 Prevents the search being executed with the init value of useState i.e. the empty string. That would generate an error. Alternatively, provide a default term when useState is initialized, which is what we did, see 
        // !VA 162 Restoring this now...
        // !VA 164 Input throttling...
        // !VA 167 Searching on initial render
        if (term && !results.length) {
          search();
        } else {
          const timeoutId = setTimeout(() => {
            if (term) {
              search();
            }
          }, 500);
          // !VA 166 Implementing a delayed request
          return () => {
            clearTimeout(timeoutId);
          }
        }
      }, [term]);


      // !VA 159 Why the dangerouslySetInnerHTML? See the lesson on XSS attacks.
      const renderedResults = results.map(( result) => {
        return (
          <div key={result.pageid} className="item">
            <div className="content">
              <div className="header">
                {result.title}
              </div>
              <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
            </div>
          </div>
        );
      });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input 
            // !VA THis is the same input processing pattern as described in earlier lesson, nothing different with hooks. 
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            />
        </div>
      </div> 
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
};

export default Search;
