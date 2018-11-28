function Product() {
  let typeis = "";
  let priceis = 0;
  let nameis = "";
  return {
    type: (t) => typeis = t,
    price: (p) => priceis = p,
    name: (n) => nameis = n
  }
}

function ProductManager() {
  let products = [];
  return {
    add: (product) => products.push(product),
    getAll: () => products,
    remove: (name) => {for (let i = 0; i<products.length; i++){
      if(products[i].name === name){
        products.splice(i,1);
      }
    }
    },
    removeAll: () => products = []
  }
}

const product1 = Product(); // Капуста
const product2 = Product(); // Брюква
const product3 = Product(); // Яблоки

product1.type = "Овощи";
product1.price = 1000;
product1.name = "Капуста";

product2.type = "Овощи";
product2.price = 100;
product2.name = "Брюква";

product3.type = "Фрукты";
product3.price = 500;
product3.name = "Яблоки";

const Prod = ProductManager();

Prod.add(product1);
Prod.add(product2);
Prod.add(product3);

//console.log(Prod.remove("Капуста"));

//console.log(Prod.removeAll());

//console.log(Prod.getAll());