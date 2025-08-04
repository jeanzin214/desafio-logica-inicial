
//aki estou criando um geraador de numeros aleatorios, para sempre de um rank diferente.

function ranker(wins, defeat) {//aki criei a função que ira fazer o calculo das vitorias e derrotas e dar um saldo que ira definir seu rank
    let res = wins - defeat
    const rank = [
        'iron',
        'bronze',
        'silver',
        'gold',
        'diamond',
        'legendary',
        'immortal'
    ]
    if (res <= 0) {//aki criei os valores que voce deve ter para conseguir algum rank
        return rank[0]
    } else if (res >= 11 && res <= 20) {
        return rank[1]
    } else if (res >= 21 && res <= 50) {
        return rank[2]
    } else if (res >= 51 && res <= 80) {
        return rank[3]
    } else if (res >= 81 && res <= 90) {
        return rank[4]
    } else if (res >= 91 && res <= 100) {
        return rank[5]
    } else if (res >= 101) {
        return rank[6]
    } else {
        return "you're noob"//caso voce esteje com apontuaçao negativa ele aparecera esta mensagem.
    }

}

function namePicker() {//aki criei alguns nome 
    let name = [
        'gabriel',
        'dudu',
        'lipe',
        'mauricio',
        'joao',
        'jean',
        'jose',
        'jessica',
        'carol',
        'luanne',
        'suellen',
        'priscila',
        'fabiola',
        'roberta'
    ]

    const allNames = Math.floor(Math.random()*name.length);
    let player= name[allNames]
        return player
//aki eu criei um sorteadokr para os nomes que estão acima
}

function finalMessage(){
    let wins = Math.floor(Math.random() * 150);
    let defeat = Math.floor(Math.random() * 130);
    let player = namePicker();
    let ranking = ranker(wins, defeat);
//Aqui temos outro sorteador, só que nesse caso é para sortear numeros aleatorios para serem usadas nas vitorrias e derrotas.

    console.log(`Congratulations ${player}! Your current ranking is ${ranking}.`)
    // aki o texto que aparece nol console "Congratulations jean! Your current rankiing is gold" .
}

for(let i=0 ; i<=3; i++){
    console.log(`execution ${i}`);
    finalMessage();
    console.log('\n')
}
//aqui o laço de repição para que repita 4 vezes o codigo noo console.

