// 4 - Crie um código JavaScript com a seguinte especificação:

// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .

let trybeString = 'Tryber x aqui!'
let skills = ['javascript', 'git', 'github', 'css', 'html']

const trocaX = text => trybeString.replace('x', text)

console.log(trocaX('Bebeto'))

// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .

const fullText = () => `${trocaX('e Felipe')} Minhas cinco principais habilidades são: ${skills.sort()}
#goTrybe`

console.log(fullText())