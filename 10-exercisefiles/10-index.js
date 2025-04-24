const testBtn = document.querySelector('.js-button')

console.log(testBtn.classList.contains('js-button'));

const GameBtn = document.querySelector('.game-btn')
const musicBtn = document.querySelector('.music-btn')
const techBtn = document.querySelector('.tech-btn')
const inputField = document.querySelector('input')
const displayInputError = document.querySelector('.display-input-error')
const displayTotal = document.querySelector('.display-total')

function changeGameBtn(choice) {
  if(choice === GameBtn) {
    if (!GameBtn.classList.contains('black-bg')) {
      GameBtn.classList.add('black-bg')
      musicBtn.classList.remove('black-bg');
      techBtn.classList.remove('black-bg')
    } 
  }
  else if (choice === musicBtn) {
    if (!musicBtn.classList.contains('black-bg')) {
      musicBtn.classList.add('black-bg')
      GameBtn.classList.remove('black-bg');
      techBtn.classList.remove('black-bg')
    }
  }
  else if(choice === techBtn) {
    if(!techBtn.classList.contains('black-bg')) {
      techBtn.classList.add('black-bg')
      GameBtn.classList.remove('black-bg')
      musicBtn.classList.remove('black-bg')
    }
  }
}

function calculateInputTotal() {
  if (inputField.value < 0) {
    displayInputError.innerHTML = 'Error: cost cannot be less than $0'
    displayTotal.innerHTML = ''
  } 
  else if (inputField.value >= 0 && inputField.value < 40) {
    displayTotal.innerHTML = `$${(+inputField.value + 10).toFixed(2)}`
    displayInputError.innerHTML = ''
  } 
  else {
    displayTotal.innerHTML = `FREE SHIPPING!!!`;
    displayInputError.innerHTML = ''
  }

}

function handleClickCalculate(event) {
  if(event.keyCode === 13) {
    calculateInputTotal()
  }
}
