import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "new text....", author: "mario", id: 1 },
    { title: "Welcome", body: "new text....", author: "yoshi", id: 2 },
    { title: "Tibs", body: "new text....", author: "mario", id: 3 },
  ]);

  const [name, setName] = useState('mario')

  const handdleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use uffect run");
    console.log(name)
  }, [name]);

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title="All Blogs !"
        handdleDelete={handdleDelete}
      />
      <button onClick={() => setName('luigi')} >Change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
