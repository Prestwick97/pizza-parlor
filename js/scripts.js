function pizza(size, topping) {
this.size = size,
this.topping = topping
}





$(document).ready(function(){
  $("form#formPizza").submit(function(event){
    event.preventDefault();

    var checkboxes = $("input:checkbox[name=pizzaTopping]:checked");
    var countToppings = checkboxes.filter(':checked').length;
    
    
    var size = $("#pizzaSize").val();
    var topping = parseInt(countToppings);
    var price = 0;
    var newPizza = new pizza(size, topping);
    
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
    
    pizza.prototype.getPrice = function() {
      return this.sizeCost() + this.toppingCost();
    }
    console.log(newPizza.getPrice());
    
  });
});