let doc = document.getElementById('formSubmit').addEventListener('submit', dayCalculator);
console.log(doc);



function dayCalculator(e){
    e.preventDefault();
    let userBirthDate = document.getElementById('birthDate').value.split('-')
    console.log(userBirthDate);
    
}