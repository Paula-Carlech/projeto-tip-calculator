function verify(){
    let verify_bill = document.getElementById('input#bill')
    if(verify_bill.value == "" || verify_bill.value == null){
        window.alert('[ERRO] Informe o valor no campo "BILL"!')
    }else{
        return true
    }

    let verify_people = document.getElementById('input#people')
    if(verify_people.value == "" || verify_people.value == null){
        window.alert('[ERRO] Informe o valor no campo "NUMBER OF PEOPLE"!')
    }else{
        return true
    }
}

function multi05(){
    let bill = document.getElementById('bill')
    bill = bill.value
    let people = document.getElementById('people')
    people = people.value
    let result = (bill/people)*0.05
    let res1 = document.querySelector('p#valor1')
    res1.innerHTML = `$ ${result.toFixed(2)}`

    let resultot = result + (bill/people)
    let res2 = document.querySelector('p#valor2')
    res2.innerHTML = `$ ${resultot.toFixed(2)}`
}

function multi10(){
    let bill = document.getElementById('bill')
    bill = bill.value
    let people = document.getElementById('people')
    people = people.value
    let result = (bill/people)*0.10
    let res1 = document.querySelector('p#valor1')
    res1.innerHTML = `$ ${result.toFixed(2)}`

    let resultot = result + (bill/people)
    let res2 = document.querySelector('p#valor2')
    res2.innerHTML = `$ ${resultot.toFixed(2)}`
}

function multi15(){
    let bill = document.getElementById('bill')
    bill = bill.value
    let people = document.getElementById('people')
    people = people.value
    let result = (bill/people)*0.15
    let res1 = document.querySelector('p#valor1')
    res1.innerHTML = `$ ${result.toFixed(2)}`

    let resultot = result + (bill/people)
    let res2 = document.querySelector('p#valor2')
    res2.innerHTML = `$ ${resultot.toFixed(2)}`
}

function multi25(){
    let bill = document.getElementById('bill')
    bill = bill.value
    let people = document.getElementById('people')
    people = people.value
    let result = (bill/people)*0.25
    let res1 = document.querySelector('p#valor1')
    res1.innerHTML = `$ ${result.toFixed(2)}`

    let resultot = result + (bill/people)
    let res2 = document.querySelector('p#valor2')
    res2.innerHTML = `$ ${resultot.toFixed(2)}`
}

function multi50(){
    let bill = document.getElementById('bill')
    bill = bill.value
    let people = document.getElementById('people')
    people = people.value
    let result = (bill/people)*0.5
    let res1 = document.querySelector('p#valor1')
    res1.innerHTML = `$ ${result.toFixed(2)}`

    let resultot = result + (bill/people)
    let res2 = document.querySelector('p#valor2')
    res2.innerHTML = `$ ${resultot.toFixed(2)}`
}

function custom(){
    let bill = document.getElementById('bill')
    bill = bill.value
    let people = document.getElementById('people')
    people = people.value
    let custom = document.getElementById('custom')
    let result = (bill/people)*custom.value
    let res1 = document.querySelector('p#valor1')
    res1.innerHTML = `$ ${result.toFixed(2)}`

    let resultot = result + (bill/people)
    let res2 = document.querySelector('p#valor2')
    res2.innerHTML = `$ ${resultot.toFixed(2)}`
}

function reset(){
    let btn = document.querySelector('button#reset')

    btn.addEventListener("click", function(){
        location.reload();
    });
}