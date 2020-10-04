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
    let d1 =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7 /*day of the week*/
    let d = Math.floor(d1*10);

    let userGender = document.getElementById('gender').value;


    console.log(CC);
    
}  