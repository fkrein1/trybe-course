import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const organizeContents = (conteudos) => {
  return conteudos.map(({conteudo, bloco, status}) => {
    let value = `O conteúdo é: ${conteudo} |
    Status: ${status} | 
    Bloco: ${bloco}`
    return <li>{value}</li>
  })
}

class Content extends React.Component {
  render() {
    return (
      <ul key='contents'>
        {organizeContents(conteudos)}
      </ul>
    )
  }
}

export default Content