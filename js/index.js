let doc = document.getElementById('formSubmit').addEventListener('submit', dayCalculator);
console.log(doc);



function dayCalculator(e){
    e.preventDefault();
    let userBirthDate = document.getElementById('birthDate').value.split('-');
    let MM = parseInt(userBirthDate[1]);
    let DD = parseInt(userBirthDate[2]);
    let CCYY = userBirthDate[0].split('');
    let CC = parseInt(CCYY[0].concat(CCYY[1]));
    let YY = parseInt(CCYY[2].concat(CCYY[3]));
    console.log();
    
}  