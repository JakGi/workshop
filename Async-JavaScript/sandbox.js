// fetch api

fetch("todos/luigi.json")
  .then((response) => {
    console.log("resolve", response);
    return response.json();
  })
  .then((date) => {
    console.log(date)
  })
  .catch((err) => {
    console.log("rejected", err);
  });
