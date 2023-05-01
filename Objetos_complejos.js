//Arreglo de objetos
let ordenPizza=[
    {
        "tipo":"margarita",
        "tamaño":"individual",
        "precio":5.67,
        "toppings":["extra queso","champiñones","piña"],
        "para llevar":true
    },
    {
        "tipo":"cuatro quesoso",
        "tamaño":"familiar",
        "precio":18.34,
        "toppings":["extra queso","pimenton"],
        "para llevar":false
    },
    {
        "tipo":"napolitana",
        "tamaño":"individual",
        "precio":6.78,
        "toppings":[],
        "para llevar":true
    }
]

console.log(ordenPizza[0].tipo);
console.log(ordenPizza[1].tipo);
console.log(ordenPizza[0].toppings[2]);
console.log(ordenPizza[1].toppings[0]);
console.log(ordenPizza[2]["para llevar"]);