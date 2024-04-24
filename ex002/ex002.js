function verificaFibonacci(numero) {
  let anterior = 0;
  let atual = 1;

  while (atual <= numero) {
      if (atual === numero) {
          return true;
      }
      let proximo = anterior + atual;
      anterior = atual;
      atual = proximo;
  }

  return false;
}

function mensagemVerificacao(numero) {
  if (verificaFibonacci(numero)) {
      return `${numero} pertence à sequência de Fibonacci.`;
  } else {
      return `${numero} não pertence à sequência de Fibonacci.`;
  }
}

let numero = parseInt(prompt("Digite um número: "))
alert(mensagemVerificacao(numero));

