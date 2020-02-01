// Business logic
function pizza(size, topping, drinks) {
this.size = size,
this.topping = topping;
this.drinks = drinks
}




// submission logic
$(document).ready(function(){
  $("form#formPizza").submit(function(event){
    event.preventDefault();
// variables
    var size = $("#pizzaSize").val();
    var toppingBoxes = $("input:checkbox[name=pizzaTopping]:checked");
    var drinkBoxes = $("input:checkbox[name=drink]:checked");
    var countToppings = toppingBoxes.filter(':checked').length;
    var countDrinks = drinkBoxes.filter(':checked').length;
    var topping = parseInt(countToppings);
    var drinks = parseInt(countDrinks);
    var price = 0;
    var newPizza = new pizza(size, topping, drinks);
// prototypes
    pizza.prototype.sizeCost = function() {
      if(this.size === "small"){
        return price + 10;
      }
      else if(this.size === "medium") {
        return price + 11;
      }
      else if(this.size === "large") {
        return price + 12;
      }
    }
    pizza.prototype.toppingCost = function() {
      return price + topping;
    }
    pizza.prototype.drinkCost = function() {
      return price + drinks;
    }
    pizza.prototype.getPrice = function() {
      return this.sizeCost() + this.toppingCost() + this.drinkCost();
    }
    // price output message
    $("#price").text("🔮✨✨Thank you! The price of your elegent pizza is: " + newPizza.getPrice() + " sparkles✨✨🔮");
  });
});