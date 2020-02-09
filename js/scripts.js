// Business logic-------
function Pizza() {
  this.price = 0;
}
// prototypes-------
Pizza.prototype.sizeCost = function() {
if(this.size === "small"){
  this.price += 10;
} else if(this.size === "medium") {
  this.price += 11;
} else if(this.size === "large") {
  this.price += 12;
}
}
Pizza.prototype.toppingCost = function() {
this.price += this.topping;
}
Pizza.prototype.drinkCost = function() {
this.price += this.drinks;
}
Pizza.prototype.addDrink = function(drinks) {
this.drinks = drinks;
}
Pizza.prototype.addSize = function(size) {
this.size = size;
}
Pizza.prototype.addTopping = function(topping) {
this.topping = topping;
}
  // User Interface
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
    newPizza.addSize(size);
    newPizza.addDrink(drinks);
    newPizza.addTopping(topping);
    newPizza.drinkCost();
    newPizza.sizeCost();
    newPizza.toppingCost();
    $("#price").text("🔮✨✨Thank you! The price of your elegent pizza is: " + newPizza.price + " sparkles✨✨🔮");
  });
});