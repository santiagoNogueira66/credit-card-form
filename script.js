function toggleDarkMode() {
  document.body.classList.add('dark-mode')
  document.body.classList.remove('light-mode')
}
function toggleLightMode(){
  document.body.classList.add('light-mode')
  document.body.classList.remove('dark-mode')
}


onload = function() {
  const cardNumber = document.getElementById('cardNumberInput')
  const name = document.getElementById('nameInput')
  const exp = document.getElementById('vencimento')
  const cvc = document.getElementById('CVCInput')

  cardNumber.addEventListener('input', function() {
    if (cardNumber.value.length === 0) {
      document.querySelector('.card-number-box').innerText = '################'
    } else {
      document.querySelector('.card-number-box').innerText = this.value
    }
  })

  name.addEventListener('input', function() {
    if (name.value.length === 0) {
      document.querySelector('.card-holder-name').innerText = 'Nome Completo'
    } else {
      document.querySelector('.card-holder-name').innerText = this.value
    }
  })

  exp.addEventListener('input', function() {
    if (exp.value.length === 0) {
      document.querySelector('.exp-month').innerText = 'mm'
      document.querySelector('.exp-year').innerText = 'yy'
    } else {
      document.querySelector('.exp-month').innerText = exp.value.slice(0, 3)
      document.querySelector('.exp-year').innerText = exp.value.slice(3)
    }
  })
  cvc.addEventListener('input', function() {
    document.querySelector('.cvv-box').innerText = cvc.value;
  })

  cvc.addEventListener('mouseenter', function() {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
  })
  cvc.addEventListener('mouseleave', function() {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(-180deg)';
  })


  document.getElementById('submitBtn').addEventListener('click', function() {
    submitForm()
  })


  
  function submitForm() {
    var cardNumberInput = document.getElementById('cardNumberInput')
    var nameInput = document.getElementById('nameInput')
    var CVCInput = document.getElementById('CVCInput')

    if (
      cardNumberInput.value.trim() !== '' &&
      nameInput.value.trim() !== '' &&
      CVCInput.value.trim() !== '' &&
      exp.value.trim() !== ''
    ) {
      alert('Cartão cadastrado com sucesso')

      cardNumberInput.value = ''
      nameInput.value = ''
      CVCInput.value = ''
      exp.value = ''
    } else {
      alert('Por favor, preencha todos os campos!')
    }
  }
}
