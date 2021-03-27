let lista = document.getElementById("lista");
//let valores = ['Irving', 'Luis', 'Melissa'];
let valores = [];

const getValue = () => valores.map(valor => {
    let componenteLi = document.createElement("li");
    componenteLi.innerHTML = valor;
    lista.appendChild(componenteLi);
})

const agregarValor = () => {
    let valor = document.getElementById("valor");
    lista.innerHTML= "";
    valores.push(valor.value);
    getValue();
    valor.value= "";
}

const limpiarValores = () => {
    lista.innerHTML = "";
    valores = [];
}

getValue();