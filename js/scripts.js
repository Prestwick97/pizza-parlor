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
    console.log(size);
    
    pizza.prototype.sizeCost = function() {
      if(this.size == "small"){
        price + 10;
      }
      else if(this.size == "medium") {
        price + 11;
      }
      else if(this.size == "large") {
        price + 12;
      }
      else {
        alert("Please select a size");
      }
    }

    pizza.prototype.toppingCost = function() {
      parseInt(price + topping);
    }
    pizza.prototype.getPrice = function() {
      return this.sizeCost() + this.toppingCost();
    }
    // console.log(newPizza.getPrice());
    
  });
});