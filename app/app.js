const billInput = document.querySelector('.bill-input');
const peopleBox = document.querySelector('.calculator__num-people');
const peopleInput = document.querySelector('.people-input');
const tipBtns = document.querySelectorAll('.tip-percent');
const tipCostum = document.querySelector('.tip-percent-c');

const tipPerPerson = document.querySelector('.tip__amount');
const totalPerPerson = document.querySelector('.tip__total');
const resetBtn = document.querySelector('.calculator__reset');

billInput.addEventListener('input', billInputFunc);
peopleInput.addEventListener('input', peopleInputFunc);
tipBtns.forEach( tip => {
    tip.addEventListener('click', handleClick);
});
resetBtn.addEventListener('click', resetInputs);
tipCostum.addEventListener('input', tipCostumFunc);

//default inputs on page load
billInput.value = '';
peopleInput.value = '';
tipCostum.value = '';
tipPerPerson.innerHTML = '$' + (0.0).toFixed(2);
totalPerPerson.innerHTML = '$' + (0.0).toFixed(2);

// defaults
let billValue = 0.0;
let tipValue = 0.15;
let peopleValue = 1;

function billInputFunc(){
    billValue = parseFloat(billInput.value);
    tipAndTotalFunc();
}

function tipCostumFunc(){
    tipBtns.forEach(elem => {
        elem.classList.remove('active');
    })
    tipValue = parseFloat(tipCostum.value / 100);
    tipAndTotalFunc();
}

function peopleInputFunc(){
    peopleValue = parseFloat(peopleInput.value);
    tipAndTotalFunc();
}

function handleClick(event){
    tipBtns.forEach(elem => {
        elem.classList.remove('active');
        if (event.target.innerHTML == elem.innerHTML) {
          elem.classList.add('active');
          tipValue = parseFloat(elem.innerHTML) / 100;
          tipCostum.value = '';
        }
      });
    tipAndTotalFunc();
}

function tipAndTotalFunc(){
    if(peopleValue == 0){
        peopleBox.classList.add('zero-alert');
    } else {
        peopleBox.classList.remove('zero-alert');
    }

    let tipAmount = (billValue * tipValue) / peopleValue;
    let total = (billValue + tipAmount) / peopleValue;
    tipPerPerson.innerHTML = '$' + tipAmount.toFixed(2);
    totalPerPerson.innerHTML = '$' + total.toFixed(2);

    if(billInput.value === '' || peopleInput.value == 0){
        tipPerPerson.innerHTML = '$' + (0.00).toFixed(2);
        totalPerPerson.innerHTML = '$' + (0.00).toFixed(2);
    }
}

function resetInputs(){
    billInput.value = '';
    peopleInput.value = '';
    tipCostum.value = '';
    tipPerPerson.innerHTML = '$' + (0.00).toFixed(2);
    totalPerPerson.innerHTML = '$' + (0.00).toFixed(2);
    peopleBox.classList.remove('zero-alert');
    tipBtns.forEach( btn => {
        btn.classList.remove('active');
    });
    tipBtns[2].classList.add('active');
}






