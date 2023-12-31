// clientes
const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

const pessoa = roberto

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

jose.carrinho = [
    {
        item: tv, quantidade: 1
    },
    {
        item: caboUsb, quantidade: 2
    },
    {
        item: webcam, quantidade: 1
    }
]

carlos.carrinho = [
    { item: notebook, quantidade: 2 }
]

patricia.carrinho = [
    { item: teclado, quantidade: 1 },
    { item: caboUsb, quantidade: 2 },
    { item: carregador, quantidade: 1 },
    { item: mouse, quantidade: 1 },
    { item: monitor, quantidade: 1 }
]

renato.carrinho = [
    { item: webcam, quantidade: 5 }
]

roberto.carrinho = [
    { item: webcam, quantidade: 1 },
    { item: caboUsb, quantidade: 2 },
    { item: monitor, quantidade: 1 }
]

let valor = 0

console.log(`
Olá ${pessoa.nome}, suas compras foram: `);
for (const carrinho of pessoa.carrinho) {
    console.log(`Quantidade: ${carrinho.quantidade}, ${carrinho.item.nome}, Valor unitário: ${(carrinho.item.valorEmCentavos / 100).toFixed(2)}`)
    carrinho.quantidade > 1 ? valor += carrinho.quantidade * carrinho.item.valorEmCentavos :
        valor += carrinho.item.valorEmCentavos
}
console.log(`Valor total: ${(valor / 100).toFixed(2)}`);
console.log();