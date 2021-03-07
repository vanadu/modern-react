import React from 'react';
// !VA Import the custom hook!
import usePosts from './usePosts';


export default function App() {
    // !VA Call the usePosts custom hook to set the variable
    const posts = usePosts();
    
    const renderedPosts = posts.map((post) => {
        return <li key={post.id}>{post.title}</li>;
    });
    
    return (
        <div>
            <h3>Posts</h3>
            <ul>{renderedPosts}</ul>
        </div>
    );
};