import React from "react";
import Post from "./Post";

const post = [
    {title: "Title#01" , subtitle: "Sub#01", likes:10},
    {title: "Title#02" , subtitle: "Sub#02", likes:20},
    {title: "Title#03" , subtitle: "Sub#03", likes:50}
]


function App () {
    return (
    <>
        <h2>Post Da semana</h2>

        <hr />

        {post.map(post => (
            <Post
            key = {post.title}
            likes={post.likes}
            post = {{
                title: post.title,
                subtitle: post.subtitle,
            }}
            />
        ))}
    </>   
    );
}

export default App;