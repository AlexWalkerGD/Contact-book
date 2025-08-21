let contactWindow = document.getElementById("newContact")

function addContact(){  
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";

    contactWindow.style.display = "flex";
}

function exit(){  contactWindow.style.display = "none"; }

function saveContact(){
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();   

    let lista = document.getElementById("list");
    let newContact = document.createElement("li");
    newContact.id = "li";
    let icon = document.createElement("img");
    icon.src = "assets/Avatar.png";
    let div = document.createElement("div");
    div.className = "data";
    let title = document.createElement("div");
    title.textContent = name;
    title.id = "Iname";
    let number = document.createElement("div");
    number.textContent = phone;
    number.id = "Iphone";

    div.appendChild(title);
    div.appendChild(number);
    newContact.appendChild(icon);
    newContact.appendChild(div);
    lista.appendChild(newContact);

    let itens = Array.from(lista.querySelectorAll("li"));

    itens.sort((a, b) => a.textContent.localeCompare(b.textContent, "pt-BR"));

    lista.innerHTML = "";
    itens.forEach(item => lista.appendChild(item));

    contactWindow.style.display = "none";
}

const input = document.getElementById("search");
const lista = document.getElementById("list");
const itens = lista.getElementById("li");

input.addEventListener('input', function() {
      const filtro = input.value.toLowerCase();

      for (let i = 0; i < itens.length; i++) {
        const texto = itens[i].textContent.toLowerCase();
        if (texto.includes(filtro)) {
          itens[i].classList.remove('hidden');
        } else {
          itens[i].classList.add('hidden');
        }
      }
    });