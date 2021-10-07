import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "new text....", author: "mario", id: 1 },
    { title: "Welcome", body: "new text....", author: "yoshi", id: 2 },
    { title: "Tibs", body: "new text....", author: "mario", id: 3 },
  ]);

  const handdleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use uffect run");
  });

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title="All Blogs !"
        handdleDelete={handdleDelete}
      />
    </div>
  );
};

export default Home;
