// 1: 📱 function for plus & minus case & phone:
function updateNumber(product, price, isIncreasing) {
    const input = document.getElementById(product +'-number');
    const numberText = input.value;
    let number = parseInt(numberText);
    if(isIncreasing) {
       number = number+1;
    }
    else if(number> 0){
       number = number-1;
    }
    input.value = number;
    const total = document.getElementById(product +'-total');
    total.innerText = number * price;
   // calculate total:
   calculateTotal();

 }
//  2: function
function getInputValue(product) {
   const productInput = document.getElementById(product +'-number');
   const productNumber = parseInt(productInput.value);
   return productNumber;
}
// 3: function
function calculateTotal() {
   const phoneTotal = getInputValue('phone') * 100;
   const caseTotal = getInputValue('case') * 5;
   const subTotal = phoneTotal + caseTotal;
   const taxTotal = subTotal / 10 ;
   const grandTotal = subTotal + taxTotal;
   // console.log(subTotal);
   // update on the html:
   document.getElementById('sub-total').innerText = subTotal;
   document.getElementById('tax-total').innerText = taxTotal;
   document.getElementById('grand-total').innerText = grandTotal;

}
 // 1: phone plus system: add event listener:
 document.getElementById('phone-plus').addEventListener('click', function(){
    // fn calling
    updateNumber('phone', 100, true);
 })   
 // 2: phone deduct system: add event 
 document.getElementById('phone-minus').addEventListener('click', function(){
    // fn calling
    updateNumber('phone', 100, false);
 })
 // 1: cass plus: add event listener :
 document.getElementById('case-plus').addEventListener('click', function(){
    // fn calling
    updateNumber('case', 5, true);
 })   
 // 2: case deduct: add event listener :
 document.getElementById('case-minus').addEventListener('click', function(){
    // fn calling
    updateNumber('case', 5, false)
 })