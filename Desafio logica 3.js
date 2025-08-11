/*  Desafio 3

Utilizando Classes e objetos...

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
 */  

//Classe que esta suportando o  nome, idade, classe e/ou tipo e sua arma
class hero {
  constructor(name, age, classes, weapon) {
    this.name = name;
    this.age = age;
    this.classes = classes;
    this.weapon = weapon;
  }
  attack() {
    console.log(
      (`The hero ${this.name}, who is a ${this.classes}, is ${this.age} years old and wields the ${this.weapon}.`)
    );
  }
}

//    Variáveis

//    Nomes
let names = [
  "everaldo",
  "evaristo",
  "edimisson",
  "evandro",
  "edson",
  "edilson",
  "edimilson",
  "erick",
  "enrique",
  "erlando",
];

//    Classes
const classes = [
  "Warlord",
  "Sorcerer",
  "Druid",
  "Shooter",
  "Assassin",
  "Paladin",
  "Thief",
  "Dudu",
  "Necromancer",
  "Witcher",
];

//    Armas com base na classe
const weapons = {
  Warlord: "Titan's Cleaver",
  Sorcerer: "Arcane Staff of Eternity",
  Druid: "Naturebound Scythe",
  Shooter: "Stormpiercer Rifle",
  Assassin: "Shadowfang Daggers",
  Paladin: "Hammer of Radiance",
  Thief: "Whisperblade",
  Dudu: "Power bank and Iphone charger cable",
  Necromancer: "Bone Scepter of the Damned",
  Witcher: "Silverfang Sword",
};

//   Functions sorteadoras

//Sorteador de nomes
function sortNames() {
  const sortName = Math.floor(Math.random() * names.length);
  return names[sortName];
}

//    Sorteador de classes

function sortWarriorClass() {
  let index = Math.floor(Math.random() * classes.length);
  return classes[index];
}

function sortAge(min = 20, max = 85) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//    Laço repetindo o script 4 vezes.
for (let i = 0; i < 5; i++) {
  
//    Juntei tudo em uma só constante.

  const selectedClass = sortWarriorClass();
  const hero1 = new hero(
    sortNames(),
    sortAge(),
    selectedClass,
    weapons[selectedClass]
  );
  hero1.attack();
}