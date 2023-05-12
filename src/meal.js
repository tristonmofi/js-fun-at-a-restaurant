function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type,
  }
}


function addIngredients(food, ingredients) {
  if(ingredients.includes(food) === false) {
    return ingredients.push(food)
  }
}



function formatPrice(price) {
  return '$' + price
}


function decreasePrice(price) {
  return price - (price * .1)
}


  function createRecipe(title, ingredients, type) {
      return {
      title: title,  
      ingredients: ingredients,
      type: type
    } 
  }



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


