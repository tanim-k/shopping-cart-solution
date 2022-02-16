console.log('I am in a separate file. here, no function is used to solve problems')
//🎡 basic problem solving learning:
// case product:
// 1: case plus system:
document.getElementById('case-plus').addEventListener('click', function(){
    const caseInput = document.getElementById('case-number');
    const caseNumberText = caseInput.value;
    let caseNumber = parseInt(caseNumberText);
    caseInput.value = caseNumber+1;
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 5;
    console.log(caseInput.value); 
 })

 // 2: case deduct system 
 document.getElementById('case-minus').addEventListener('click', function(){
    const caseInput = document.getElementById('case-number');
    const caseNumberText = caseInput.value;
    const caseNumber = parseInt(caseNumberText);
    caseInput.value = caseNumber-1;
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 5;
    console.log(caseInput.value);
 })
// phone product: 
// 1: phone plus system:
document.getElementById('phone-plus').addEventListener('click', function(){
    const phoneInput = document.getElementById('phone-number');
    const phoneNumberText = phoneInput.value;
    const phoneNumber = parseInt(phoneNumberText);
    phoneInput.value = phoneNumber+1;
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = phoneNumber * 100;
    console.log(phoneInput.value); 
 })
 // 2: phone deduct system 
 document.getElementById('phone-minus').addEventListener('click', function(){
    const phoneInput = document.getElementById('phone-number');
    const phoneNumberText = phoneInput.value;
    const phoneNumber = parseInt(phoneNumberText);
    phoneInput.value = phoneNumber-1;
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = phoneNumber * 100;
    console.log(phoneInput.value);
 })