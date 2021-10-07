import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading , setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // npx json-server --watch data/db.json --port 8000

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if(!res.ok) {
          throw Error('could not fetch data')
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsLoading(false)
        setError(null)
      })
      .catch(err => {
        setIsLoading(false);
        setError(err.message);
      })
  }, []);

  return (
    <div className="home">
      { error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs !" />}
    </div>
  );
};

export default Home;
