import React, { useState, useEffect, useContext } from "react";
import PostContext from "../Contexts/PostContexts";

export default function Posts() {
  const { posts, setPosts } = useContext(PostContext);

  return (
    <>
      {posts.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
        </div>
      ))}
    </>
  );
}
