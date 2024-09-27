const button = document.querySelector('button')

const calculate = () => {
    const weight = document.querySelector('#weight').value
    const hours = document.querySelector('#time').value
    const bottles = document.querySelector('#bottles').value
    const gender = document.querySelector('input[name="gender"]:checked').value
    let promilles = 0

    let liters = bottles*0.33
    let grams = liters * 8 * 4.5
    let combustionRate = weight / 10
    let gramsLeft = grams-(combustionRate*hours)

    if(gender === 'male') {
        promilles = gramsLeft / (weight * 0.7)     
    } else {
        promilles = gramsLeft / (weight * 0.6)
    }

    const result = document.querySelector('output')
    if (promilles > 0) {
        result.innerHTML = promilles.toFixed(2)    
    } else {
        result.innerHTML = 0
    }
    
}

button.addEventListener('click', calculate)