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

function removeMenuItem(pizzaRestaurant, food) {
  for (var i = 0; i < pizzaRestaurant.length; i++) {
    if (pizzaRestaurant[i].menus[food.type].includes(food) === true) {
      pizzaRestaurant.menus[food.type].splice(i, 1)
    }
  } return `No one is eating our ${food} - it has been removed from the breakfast menu!`
}









module.exports = {
createRestaurant, 
addMenuItem,
removeMenuItem,
  // checkForFood
}