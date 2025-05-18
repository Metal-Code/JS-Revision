// this usecase will give you empty value
// const weight = parseInt(document.querySelector('#weight').value)
// const height = parseInt(document.querySelector('#height').value)


const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    
    if(height === '' || height < 0 || isNaN(height))
    {
        results.innerHTML = `Please give Valid Height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight))
    {
        results.innerHTML = `Please give Valid Height ${weight}`
    }
    else
    {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        if(bmi < 18.6)
        {
            results.innerHTML = `<span>${bmi}</span><p>You are under weight</p>`
        }
        else if(bmi >= 18.6 && bmi <=24.9)
        {
            results.innerHTML = `<span>${bmi}</span><p>You are in Normal Range</p>`
        }
        else
        {
            results.innerHTML = `<span>${bmi}</span><p>You are overweight</p>`
        }
    }
});