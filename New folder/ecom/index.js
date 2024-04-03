// import products from "./api/product.json" assert { type: 'json' }; // not work in firefox
// console.log(products);

fetch('./api/product.json')
  .then(response => { 
    return response.json()
   })
  .then(products => {
    // Handle the retrieved products data
    console.log(products);
  })