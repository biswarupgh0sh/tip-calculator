//let's create the variables
const billDiv = document.getElementById('billTotalInput');
const tipDiv = document.getElementById('tipInput');
const perPersonDiv = document.getElementById('perPersonTotal');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const plus = document.getElementById('plusBtn');
const minus = document.getElementById('minusBtn');

//number of people
let numberOfPeople = Number(numberOfPeopleDiv.innerText);
//function for two inputs
const calculateBill = () => {
    let totalBill = Number(billDiv.value);
    let totalWithTip = ((Number(tipDiv.value) / 100) * totalBill) + totalBill;
    let perPersonTotal = totalWithTip / numberOfPeople;
    perPersonDiv.innerText = `₹${perPersonTotal.toFixed(2)}`
}
//to increase the number of guests
plus.addEventListener("click", () => {
    numberOfPeople += 1;
    numberOfPeopleDiv.innerText = numberOfPeople;
    calculateBill();
});
//to decrease the number of guests
minus.addEventListener("click", () => {
    if(numberOfPeople <= 1){
        return
    }
    numberOfPeople -= 1;
    numberOfPeopleDiv.innerText = numberOfPeople;
    calculateBill();
});