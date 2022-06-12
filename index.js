const questions = [
    "O que aprendi hoje?",
    "O que me estressou hoje?",
    "O que poderia ter feito melhor?",
    "O que me fez feliz?",
    "Quem eu ajudei hoje?",
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const anwsers = []

process.stdin.on("data", data => {
    anwsers.push(data.toString().trim())
    if (anwsers.length < questions.length) {
        ask(anwsers.length)
    } else {
        process.stdout.write(anwsers + "\n\n")
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
    Hello Nick

    Hoje você aprendeu:
    ${anwsers[0]};

    Aquilo que te irritou foi:
    ${anwsers[1]};

    Ação para melhorar:
    ${anwsers[2]};

    Te deixou feliz:
    ${anwsers[3]};

    Quem ajudou:
    ${anwsers[4]}

    Apesar de tudo, o saldo do dia parece bom. Até amanhã!
    `)
})