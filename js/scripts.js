function pizza(size, topping) {
this.size = size,
this.topping = topping
}





$(document).ready(function(){

  var checkboxes = $('#"input:checkbox[name=pizzaTopping]:checked"');
      
  checkboxes.change(function(){
      var countCheckedCheckboxes = checkboxes.filter(':checked').length;
  });

});