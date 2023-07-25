import React from "react";
import Post from "./Post";

const post = [
    {title: "Title#01" , subtitle: "Sub#01", likes:20},
    {title: "Title#01" , subtitle: "Sub#01", likes:20},
    {title: "Title#01" , subtitle: "Sub#01", likes:20}]


function App () {
    return (
    <>
        {post.map(
            post => (
                <Post 
                likes={post.likes}
                post ={
                    {
                        title: post.title,
                        subtitle:post.subtitle,
                    }
                }/>
            )
        )}


    </>   
    );
}

export default App;