const form = document.querySelector(".form");
const inp = document.querySelector("#inp");
const btn = document.querySelector(".btn");
const ul = document.querySelector(".ul");
let id = 0;

btn.addEventListener("click", Handler);

function Handler(event) {
	event.preventDefault();
	const li = document.createElement("li");
	li.style.marginLeft = "15px";
	id++;
	li.id = id;
	li.innerText = inp.value;
	localStorage.setItem(li.id,inp.value);
	const key = localStorage.getItem(li.id);
	

	
	ul.appendChild(li)
	inp.value = "";
	
	const btnDelete = document.createElement("button");
  btnDelete.style.margin = "7px";
	btnDelete.innerText = "Delete task";
	li.appendChild(btnDelete);
	
	btnDelete.addEventListener('click', () => {
		li.remove();
		localStorage.removeItem(this.id)
	});
}