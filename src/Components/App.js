import React, { useState } from "react";
import PostContext from "../Contexts/PostContexts";
import AddForm from "./AddForm";
import Posts from "../Contexts/Posts";
export default function App() {
  const [posts, setPosts] = useState([]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      <div className="App">
        <AddForm />
        <Posts />
      </div>
    </PostContext.Provider>
  );
}
