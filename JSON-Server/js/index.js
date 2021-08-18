// js for index.html

const container = document.querySelector(".blogs");
const searchFrom = document.querySelector(".search");
// term szuka
const renderPosts = async (term) => {
//   let uri = "http://localhost:3000/posts";

  // sorted
  let uri = 'http://localhost:3000/posts?_sort=likes$_order=desc';
  if (term) {
      uri += `&q=${term}`;
  }

  const res = await fetch(uri);
  const posts = await res.json();

  let template = "";
  posts.forEach((post) => {
    template += `
        <div class="post">
           <h2>${post.title}</h2> 
           <p>${post.likes} likes</p>
           <p>${post.body.slice(0, 200)}</p>
           <a href="/JSON-Server/details.html?id=${post.id}">read more...</a>
        </div>
        `;
  });

  container.innerHTML = template;
};

searchFrom.addEventListener('submit' , (e) => {
    e.preventDefault();
    renderPosts(searchFrom.term.value.trim())
})

window.addEventListener("DOMContentLoaded", () => renderPosts());
