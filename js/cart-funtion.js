// 1: 📱 function for plus & minus case:
function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    const caseNumberText = caseInput.value;
    let caseNumber = parseInt(caseNumberText);
    if(isIncreasing) {
       caseNumber = caseNumber+1;
    }
    else if(caseNumber> 0){
       caseNumber = caseNumber-1;
    }
    caseInput.value = caseNumber;
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber*5;
    console.log(caseInput.value);
 }
 // 1: cass plus system:
 document.getElementById('case-plus').addEventListener('click', function(){
    // fn calling
    updateCaseNumber(true);
 })   
 // 2: case deduct system 
 document.getElementById('case-minus').addEventListener('click', function(){
    // fn calling
    updateCaseNumber(false)
 })
 // 2: 💎 function for plus & minus product phone:
 function updatePhoneNumber(isIncreasing) {
    const phoneInput = document.getElementById('phone-number');
    const phoneNumberText = phoneInput.value;
    let phoneNumber = parseInt(phoneNumberText);
    if(isIncreasing) {
       phoneNumber = phoneNumber+1;
    }
    else if(phoneNumber> 0){
       phoneNumber = phoneNumber-1;
    }
    phoneInput.value = phoneNumber;
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = phoneNumber*100;
    console.log(phoneInput.value);
 }
 // 1: phone plus system:
 document.getElementById('phone-plus').addEventListener('click', function(){
    // fn calling
    updatePhoneNumber(true);
 })   
 // 2: phone deduct system 
 document.getElementById('phone-minus').addEventListener('click', function(){
    // fn calling
    updatePhoneNumber(false)
 })