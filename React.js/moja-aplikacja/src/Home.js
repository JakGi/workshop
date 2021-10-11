import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  const { data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

  // npx json-server --watch data/db.json --port 8000

 

  return (
    <div className="home">
      { error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs !" />}
    </div>
  );
};

export default Home;
