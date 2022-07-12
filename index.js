// buttons
let p1 = document.querySelector("#prdc1b"),
  p2 = document.querySelector("#prdc2b"),
  p3 = document.querySelector("#prdc3b"),
  p4 = document.querySelector("#prdc4b");

// cart table
let cart = document.querySelector("table tbody");

// events
p1.addEventListener("click", add_product);
p2.addEventListener("click", add_product);
p3.addEventListener("click", add_product);
p4.addEventListener("click", add_product);
cart.addEventListener("click", remove_product);

// funtions

function add_product(e) {
  let divs = e.target.parentElement.parentElement.querySelectorAll("div");
  let tr = document.createElement("tr");
  tr.innerHTML = `<th scope="row">${divs[0].textContent}</th>
              <td>${divs[1].textContent}</td>
              <td>
                <button type="button" class="btn btn-outline-danger">X</button>
              </td>`;
  cart.appendChild(tr);
}

function remove_product(e) {
  console.log(e.target);
  if (e.target.getAttribute("type") == "button") {
    e.target.parentElement.parentElement.remove();
  }
}
