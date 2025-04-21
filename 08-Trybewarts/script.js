const headerInputEmail = document.querySelector('.header-input-email');
const headerInputSenha = document.querySelector('.headerInputSenha');
const headerBtnEntrar = document.querySelector('.header-btn-entrar');
const inputAgreement = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');

headerBtnEntrar.addEventListener('click', () => {
  if (
    headerInputEmail.value === 'tryber@teste.com'
    && headerInputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function confirmarEnvio() {
  if (inputAgreement.checked === true) {
    btnSubmit.disabled = false;
  } else if (inputAgreement.checked === false) {
    btnSubmit.disabled = true;
  }
}

inputAgreement.addEventListener('change', confirmarEnvio);
