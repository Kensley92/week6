import React, { useState, useEffect } from "react";
import axios from "axios";

const TodoList = () => {
    const [posts, setPosts] = useState();

    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res0) => {
            const setPosts = res.data;
            setPosts(setPosts);
        });
    }, []);
    return (
        <div>
           <h1>To Do List</h1>
            {posts &&
            posts.map((todo) => {
            const {id, title} = posts;
            return (
              <div key={id}>
                <h2>{title}</h2>
                <h3>Information: {id}</h3>
              </div>
                )
            })}
        </div>
    );
  };