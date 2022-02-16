console.log('I am in a separate file. here, no function is used to solve problems')
//🎡 basic problem solving learning:

// 1: cass plus system:
document.getElementById('case-plus').addEventListener('click', function(){
    const caseInput = document.getElementById('case-number');
    const caseNumberText = caseInput.value;
    const caseNumber = parseInt(caseNumberText);
    caseInput.value = caseNumber+1;
    console.log(caseInput.value); 
 })
 // 2: case deduct system 
 document.getElementById('case-minus').addEventListener('click', function(){
    const caseInput = document.getElementById('case-number');
    const caseNumberText = caseInput.value;
    const caseNumber = parseInt(caseNumberText);
    caseInput.value = caseNumber-1;
    console.log(caseInput.value);
 })