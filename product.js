function Product(type, name, price) {
  return {type, name, price}
}

function ProductManager() {
  let products = [];
  return {
    add: (product) => products.push(product),
    getAll: () => products.slice(),
    remove: function (name) {
      for(let i=0;i<products.length;i++){
        if(products[i].name === name){
          products.splice(i,1);
        }
      }
    },
    removeAll: () => products = []
  }
}

const product1 = Product("Овощи", "Капуста", 1000); // Капуста
const product2 = Product("Овощи", "Брюква", 100); // Брюква
const product3 = Product("Фрукты", "Яблоки", 500); // Яблоки

const Prod = ProductManager();

Prod.add(product1);
Prod.add(product2);
Prod.add(product3);

//console.log(Prod.remove("Капуста"));

//console.log(Prod.removeAll());

console.log(Prod.getAll());