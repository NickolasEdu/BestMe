# Best Me App

Uma aplicação simples que está retornando no console algumas reflexões sobre o seu dia, consiste em receber respostas sobre algumas perguntas e no final um parâmetro geral do que foi respondido.

Para isso foi usado 3 métodos: stdout, stdin e on.

O stdout e stdin são abreviações para Standard Output e Standard Input, enquanto o On é equivalente ao addEventListener no javascript.

## process.stdout

O método stdout.write() é um função raiz do console.log, o console é um shorthand que já vem com uma configuração padrão. Por exemplo, para obtermos o mesmo output em ambos os métodos.

```javascript

console.log('Hello World!')
process.stdout.write('Hello World! \n')
```

O '\n' dentro do valor escrito no output significa New Line, ou seja, ao escrever aquilo joga a linha de comando para uma nova linha, ou com vários '\n\n\n' é possível dar maiores espaços entre os outputs. Nesse caso a syntax de outoput do .stdout equivale ao comportamento padrão do console.log.

## process.stdin

No exemplo o stdin está atrelado ao on(), na função ask está sendo rodada uma pergunta por vez, equivalente ao valor de index do array passado na syntax do output. Enquanto isso o on() está atento a toda vez que um dado é inserido pelo stdin, e retornando a um array vazios, sendo esses dados referentes as respostas.

O stdin está atrelado a uma condicional que diz para o sistema qual a condição de continuar recebendo inputs, ao terminar é usado o 'process.exit()', que encerra a execução. Porém além do encerramento ele faz a chamada de uma callback que imprime todas as respostas salvas no array que inicialmente estava avazio.

## process.on()

Por fim na função de escuta 'process.on(exit), essa função fica de escuta esperando o chamado do evento exit. Ao ele ser chamado e encerrar a execução esta função dispara e está fazendo outro console.log com um texto literal trazendo o resumo das respostas dadas.