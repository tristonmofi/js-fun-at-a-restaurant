function takeOrder(orders, deliveryOrders) {
  if (deliveryOrders.length < 3) {
  return deliveryOrders.push(orders)
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1) 
    } 
  } 
}

 

function listItems(deliveryOrders) {
  newArray = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    newArray.push(deliveryOrders[i].item)
    }
    return newArray.join(', ')
  }  

  
function searchOrder(deliveryOrders, food) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === food) {
      return true 
    }
  } return false
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}