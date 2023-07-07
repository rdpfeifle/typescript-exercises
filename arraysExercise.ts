// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

// let ages: number[] = [];
let ages: Array<number> = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
let gameBoard: string[][] = [];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = {
  name: string;
  price: number;
};

const products = [
  {
    name: "coffee mug",
    price: 11.5,
  },
  {
    name: "Colombian coffee",
    price: 22.95,
  },
];

products.push({ name: "Brazilian coffee", price: 9.48 });

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

function getTotal(productsLst: Product[]): number {
  const total = productsLst.reduce((runningTotal, product) => {
    return runningTotal + product.price;
  }, 0);

  return total;
}

console.log(getTotal(products));
