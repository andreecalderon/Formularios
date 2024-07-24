//llamado a un node del DOM
let root = document.querySelector("#root");

root.innerHTML = `Hola mundo`;

//elemento de tipo div con un atributo class
let div_formulario = document.createElement("div");
div_formulario.className = "div-formularios";

//lista de textos
let formularios =   [
    {nombre:"login", link:"https:"},
    {nombre:"login", link:"https:"},
    {nombre:"login", link:"https:"},
    {nombre:"login", link:"https:"},
     ];

//forEach (for)
formularios.forEach(itemLista =>{ 
    let div_item = document.createElement("a");
    div_item.className = "div-item";
    div_item.href = itemLista.link;
    div_item.innerText = itemLista.nombre;

    div_formulario.appendChild(div_item);
});

root.appendChild(div_formulario);

