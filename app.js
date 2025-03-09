const Ratings = document.querySelectorAll('.rate');
let rateValue = null;
let Button = document.querySelector('button');
let rateResult = document.querySelector('.result h3');
let ratingMessage = document.querySelector('.previous');
let thankYou = document.querySelector('.after');
Ratings.forEach(item => 
    item.addEventListener('click', function(){
        Ratings.forEach(s => s.setAttribute('id', 'nothing'));
        item.setAttribute('id', 'numbers');
        rateValue = this.dataset.value;
    })
);

Button.addEventListener('click', function(){
    ratingMessage.style.display = 'none';
    thankYou.style.display = 'block';
    if(rateValue){
        rateResult.textContent = 'You Selected ' + rateValue + ' out of 5';
    }
    else{
        rateResult.textContent = 'Please select a rating before submitting'
    }
})


