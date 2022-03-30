let message: String // Tipagem de String
message = "Mensagem"

let number: Number // Tipagem de Numero
number = 30

let listaDeCompras: Array<number>  // Tipagem de Array e mostrando que dentro do array vai ter a tipagem de number
listaDeCompras = [1, 2, 3, 4, 5, 6, 7, 8];

let tuple: [number, string, number]; // Tipagem de tupla indicando quais tipos do valores da exata posição vao ter
tuple = [123, "123", 123]

let any: any // Tipagem que indica que a váriavel pode ser de qualquer tipo ( Não é Legal! )
any = true

function logger(): void { // tipagem void significa algo que nao retorna nada
    console.log("123 testando ...")
}

// null | undefined // foi criado um  type alias que pode ter o valor null ou undefinded
type Bla = null | undefined;

function mostrarErro () :never { // Tipagem never define que na funcao mostraErro nunca vai ser retornado um erro
    throw new Error("error");
}

let cart: object // tipagem de Objeto
cart = {
    key: "key"
}