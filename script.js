let contactWindow = document.getElementById("newContact")
let warning = document.getElementById("warningText");

function addContact(){  
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";

    contactWindow.style.display = "flex";
}

function exit(){  
    warning.style.display = "none";
    contactWindow.style.display = "none";
}

function saveContact(){
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();   

    if(name !== "" && phone !== "" && email !== "" ){

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
      title.classList.add("nome");
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
    
    else{
      warning.style.display = "block";
    }
}

const input = document.getElementById("search");
const list = document.getElementById("list");

input.addEventListener("input", () => {
  const filtro = input.value.toLowerCase();

  const itens = list.querySelectorAll("li");

  itens.forEach(item => {
    const textDiv = item.querySelector(".nome"); 
    const text = textDiv ? textDiv.textContent.toLowerCase() : "";
    item.style.display = text.includes(filtro) ? "" : "none";
  });
});
