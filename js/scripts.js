// Business logic
function Pizza(price) {
this.price = 0;
}
// var price = 0;

// variables

// this.price = 0;

// prototypes
Pizza.prototype.sizeCost = function() {
  if(this.size === "small"){
    this.price += 10;
  }
  else if(this.size === "medium") {
    this.price += 11;
  }
  else if(this.size === "large") {
    this.price += 12;
  }
}

Pizza.prototype.toppingCost = function() {
  this.price += this.topping;
}

Pizza.prototype.drinkCost = function() {
  this.price += this.drinks;
}
Pizza.prototype.addDrink = function(drink) {
  this.drink = drink;
}

Pizza.prototype.addSize = function(size) {
  this.size = size;
}
Pizza.prototype.addTopping = function(topping) {
  this.topping = topping;
}

Pizza.prototype.getPrice = function() {
  this.price = (this.size + this.topping + this.drinks);
}
console.log(Pizza.price);

// submission logic
$(document).ready(function(){
  $("form#formPizza").submit(function(event){
    event.preventDefault();
    var toppingBoxes = $("input:checkbox[name=pizzaTopping]:checked");
    var drinkBoxes = $("input:checkbox[name=drink]:checked");
    var countToppings = toppingBoxes.filter(':checked').length;
    var countDrinks = drinkBoxes.filter(':checked').length;
    var size = $("#pizzaSize").val();
    var topping = parseInt(countToppings);
    var drinks = parseInt(countDrinks);
    var newPizza = new Pizza(size, topping, drinks);
    newPizza.sizeCost();
    newPizza.toppingCost();
    newPizza.sizeCost();
    newPizza.addSize(size);
    newPizza.addDrink(drinks);
    newPizza.addTopping(topping);
    newPizza.drinkCost();
    newPizza.getPrice();
    // price output message
    console.log(newPizza.price);
    
    $("#price").text("🔮✨✨Thank you! The price of your elegent pizza is: " + newPizza.price + " sparkles✨✨🔮");
  });
});