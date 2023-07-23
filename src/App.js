import React from "react";
import Post from "./Post";

function App () {
    return (
    <>
        <h1>dddd</h1>
        <Post 
        title="Titulo 01"
        subtitle ="titulo 02" 
        likes = {20}/>
        <Post likes = {20} />
        <Post likes = {20}/>
        
    </>   
    );
}

export default App;