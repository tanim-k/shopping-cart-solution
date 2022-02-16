// 1: 📱 function for plus & minus case & phone:
function updateCaseNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(product +'-number');
    const caseNumberText = caseInput.value;
    let caseNumber = parseInt(caseNumberText);
    if(isIncreasing) {
       caseNumber = caseNumber+1;
    }
    else if(caseNumber> 0){
       caseNumber = caseNumber-1;
    }
    caseInput.value = caseNumber;
    const caseTotal = document.getElementById(product +'-total');
    caseTotal.innerText = caseNumber * price;
    console.log(caseInput.value);
 }
 // 1: phone plus system: add event listener:
 document.getElementById('phone-plus').addEventListener('click', function(){
    // fn calling
    updateCaseNumber('phone', 100, true);
 })   
 // 2: phone deduct system: add event listener: 
 document.getElementById('phone-minus').addEventListener('click', function(){
    // fn calling
    updateCaseNumber('phone', 100, false);
 })
 // 1: cass plus event listener :
 document.getElementById('case-plus').addEventListener('click', function(){
    // fn calling
    updateCaseNumber('case', 5, true);
 })   
 // 2: case deduct event listener :
 document.getElementById('case-minus').addEventListener('click', function(){
    // fn calling
    updateCaseNumber('case', 5, false)
 })