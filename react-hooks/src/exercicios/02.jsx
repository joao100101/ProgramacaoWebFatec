import * as React from 'react'

function Greeting({initialName = ''}) {
  // 🐨 inicialize o estado como o valor do localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
  //const [name, setName] = React.useState(initialName)

  // No valor inicial deste state, consultamos o localStorage
  // para verificar se, previamente, foi armazenado algum valor
  // na chave chamada "name". Se tal valor existir, vamos usá-lo
  // como valor inicial. Caso contrário, usaremos o valor da prop
  // "initialName" como valor inicial.

  // Normalmente, o valor inicial de uma variável de estado é
  // reinicializado a cada atualização. Para evitar isso, podemos
  // usar um "lazy initializer", que ajustará o valor inicial da
  // variável de estado apenas na primeira vez.

  // Para implementar um "lazy initializer", basta colocar uma função
  // dentro dos parênteses do useState, a qual retorna o valor inicial
  // a ser usado
  const [name, setName] = React.useState(
    // Usando lazy initializer
    () => getInitialName()
  )

  function getInitialName() {
    console.count('Leu localStorage')
    return window.localStorage.getItem('name') ?? initialName
  }

  // 🐨 Aqui é onde usamos `React.useEffect`.
  // A função deve armazenar `name` no localStorage.
  // 💰 window.localStorage.setItem('name', name)
  React.useEffect(() => {
    // Armazena o valor atualizado da variável de estado "name"
    // no localStorage
    window.localStorage.setItem('name', name)
  })

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
    </div>
  )
}

function Exercicio02() {
  return <Greeting />
}

export default Exercicio02