// buttons
let p1 = document.querySelector("#prdc1b"),
  p2 = document.querySelector("#prdc2b"),
  p3 = document.querySelector("#prdc3b"),
  p4 = document.querySelector("#prdc4b");

// cart table
let cart = document.querySelector("#tbl");

// events
p1.addEventListener("click", add_product);
p2.addEventListener("click", add_product);
p3.addEventListener("click", add_product);
p4.addEventListener("click", add_product);

function add_product(e) {
  //   console.log(e.target);
  console.log(e.target.parentElement.parentElement);
  let divs = e.target.parentElement.parentElement.querySelectorAll("div");
  //   console.log(divs[0]);

  let tr = document.createElement("tr");
  tr.innerHTML = `<th scope="row">${divs[0].textContent}</th>
              <td>${divs[1].textContent}</td>
              <td>
                <button type="button" class="btn btn-outline-danger">X</button>
              </td>`;
  cart.appendChild(tr);
}
