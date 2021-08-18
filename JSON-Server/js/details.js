// js for details

// (window.location.search) === ?id=1 2 3
const id = new URLSearchParams(window.location.search).get("id");

const container = document.querySelector(".details");

const deleteBtn = document.querySelector(".button");

const renderDeatails = async () => {
  const res = await fetch("http://localhost:3000/posts/" + id);
  const post = await res.json();

  const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    `;

  container.innerHTML = template;
};

deleteBtn.addEventListener("click", async (e) => {
  const res = await fetch("http://localhost:3000/posts/" + id, {
    method: "DELETE",
  });
  window.location.replace("/JSON-Server/index.html");
});

window.addEventListener("DOMContentLoaded", () => renderDeatails());
