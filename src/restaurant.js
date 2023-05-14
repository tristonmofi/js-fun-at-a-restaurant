function createRestaurant(name) {
  return pizzaRestaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    },
  } 
}

function addMenuItem(pizzaRestaurant, food) {
    if (pizzaRestaurant.menus[food.type].includes(food) === false) {
      return pizzaRestaurant.menus[food.type].push(food)
    }
  }











module.exports = {
createRestaurant, 
addMenuItem,
  // removeMenuItem,
  // checkForFood
}