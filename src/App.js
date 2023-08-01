import React from "react";
import Post from "./Post";
import { func } from "prop-types";

const post = [
    {id:Math.random() ,title: "Title#01" , subtitle: "Sub#01", likes:10},
    {id:Math.random() ,title: "Title#02" , subtitle: "Sub#02", likes:20},
    {id:Math.random() ,title: "Title#03" , subtitle: "Sub#03", likes:50}
]


function App () {

    function handleRefresh(){
        post.push({
            id: Math.random(),
            title: `Title#0${post.length + 1}`,
            subtitle: `Sub#03`,
            likes: 50,
        });
    }

    return (
    <>
        <h2>Post Da semana
            <button onClick={handleRefresh}>
                Atualizar
            </button>
        </h2>
        <h1>
            breve atualização
        </h1>

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