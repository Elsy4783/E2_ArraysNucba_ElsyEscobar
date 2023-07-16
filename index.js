const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 550,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

/*
a) Las pizzas que tengan un id impar.
b) Responder: ¿Hay alguna pizza que valga menos de $600?
c) El nombre de cada pizza con su respectivo precio.
d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.
*/

console.log("#######################################");
console.log(" ");
console.log("***************************************");
console.log("A.- PIZZAS CON ID IMPAR");
console.log("***************************************");
const pizzaIdImpar = pizzas.filter((pizzas) => pizzas.id % 2 !== 0);
pizzaIdImpar.forEach((pizzaIdImpar) => {
  console.log(
    pizzaIdImpar.nombre.toUpperCase() + " /   ID: " + pizzaIdImpar.id
  );
  console.log(
    "La " +
      pizzaIdImpar.nombre.toUpperCase() +
      " tiene un Id IMPAR, Su Id es: " +
      pizzaIdImpar.id
  );
  console.log("---------------------------------------");
});
console.log("***************************************");
console.log(" ");

console.log("#######################################");
console.log(" ");
console.log("***************************************");
console.log("B.- PIZZAS CON PRECIO INFERIOR A $600");
console.log("***************************************");
const pizzaMenor600 = pizzas.filter((pizzas) => pizzas.precio < 600);
pizzaMenor600.forEach((pizzaMenor600) => {
  console.log(
    "La " +
      pizzaMenor600.nombre.toUpperCase() +
      " tiene un costo inferior a $600, su precio actual es de $" +
      pizzaMenor600.precio
  );
  console.log("---------------------------------------");
});
console.log("***************************************");
console.log(" ");

console.log("#######################################");
console.log(" ");
console.log("***************************************");
console.log("C.- LISTA DE PRECIOS");
console.log("***************************************");
pizzas.forEach((pizzas) => {
  console.log(
    pizzas.nombre.toUpperCase() + " ..............  $" + pizzas.precio
  );
});
console.log("***************************************");
console.log(" ");

console.log("#######################################");
console.log(" ");
console.log("***************************************");
console.log("D.- LISTA DE INGREDIENTES");
console.log("***************************************");
pizzas.forEach((pizzas) => {
  console.log(pizzas.nombre.toUpperCase());
  console.log("INGREDIENTES: " + pizzas.ingredientes.join(", "));
  console.log("---------------------------------------");
});
console.log("***************************************");
