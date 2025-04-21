const selecionaOL = document.querySelector('#lista-tarefas');
const selecionaInput = document.getElementById('texto-tarefa');
const selecionaBotaoSalvar = document.getElementById('criar-tarefa');
const selecionaBotaoLimpar = document.getElementById('apaga-tudo');
const selecionaBotaoLimparCompletos = document.getElementById(
  'remover-finalizados',
);

selecionaBotaoSalvar.addEventListener('click', () => {
  const criaLI = document.createElement('li');
  criaLI.innerText = selecionaInput.value;
  criaLI.className = 'tarefasAdd';
  selecionaOL.appendChild(criaLI);
  selecionaInput.value = '';
});

selecionaOL.addEventListener('click', (e) => {
  const cor = document.querySelector('.corCinza');
  if (cor) {
    cor.classList.remove('corCinza');
  }
  e.target.classList.add('corCinza');
});

selecionaOL.addEventListener('dblclick', (e) => {
  const selecionaCompleto = e.target;
  if (selecionaCompleto.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
});

selecionaBotaoLimpar.addEventListener('click', () => {
  selecionaOL.innerText = '';
});

selecionaBotaoLimparCompletos.addEventListener('click', () => {
  const selecionaCompleted = document.querySelectorAll('.completed');

  for (let index = 0; index < selecionaCompleted.length; index += 1) {
    selecionaOL.removeChild(selecionaCompleted[index]);
  }
});
