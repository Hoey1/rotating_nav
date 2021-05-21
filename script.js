const open = document.getElementById("open");
const close = document.getElementById("close");

// Since it is a class, use querySelector <dot> container
const container = document.querySelector(".container");

// When #open(ID) is clicked, the arrow function will add show-nav to that container
open.addEventListener("click", () => container.classList.add("show-nav"));

// When #close(ID) is clicked, the arrow function will remove show-nav from the container. To bring back the normal view
close.addEventListener("click", () => container.classList.remove("show-nav"));
