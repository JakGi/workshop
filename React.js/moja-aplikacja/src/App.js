import "./App.css";

function App() {
  const title = "Welcome to the new blog";
  const likes = 60;
  // const person = { name:'Kuba', age: 30};
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>{likes} times</p>

        {/* <p>{person}</p> */}

        <p>{10}</p>
        <p>{"hello"}</p>
        <p>{[1,2,3,4]}</p>
        <p>{Math.random()*10}</p>

        <a href={link}>Google site</a>
      </div>
    </div>
  );
}

export default App;
