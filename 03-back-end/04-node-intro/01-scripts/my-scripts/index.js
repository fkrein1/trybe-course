const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', path: './imc.js' },
  { name: 'Calcular velocidade média', path: './velocidade.js' },
  { name: 'Jogo de adivinhação', path: './sorteio.js' },
  { name: 'Calcular fatorial', path: './fatorial.js' },
  { name: 'Exibir n números de fibonacci', path: './fibonacci.js' },

];

function escolherScript() {
  let enunciado = 'Escolha um número para executar o script correspondente\n';
  scripts.forEach(
    (script, index) => (enunciado += `${index + 1}) ${script.name}\n`),
  );
  const answer = readline.questionInt(enunciado) - 1;

  if (scripts[answer]) return require(scripts[answer].path);
  return console.log('Número inválido. Saindo');
}

escolherScript();
