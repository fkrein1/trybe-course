// Parte I - Game Actions Simulator
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo.

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 120,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (obj) => {
  let maxDamage = obj.dragon.strength;
  let minDamage = 15;
  return Math.floor(Math.random() * (maxDamage + 1 - minDamage)) + minDamage;
}

const warriorDamage = (obj) => {
  let maxDamage = obj.warrior.weaponDmg * obj.warrior.strength;
  let minDamage = obj.warrior.strength;
  return Math.floor(Math.random() * (maxDamage + 1 - minDamage)) + minDamage;
}

const mageDamage = (obj) => {
  let maxDamage = obj.mage.intelligence * 2
  let minDamage = obj.mage.intelligence
  let damage = Math.floor(Math.random() * (maxDamage + 1 - minDamage)) + minDamage;
  if (obj.mage.mana < 15) {
    return {damage: "Não possui mana suficiente", spentMana: 0}
  } else {
    return {damage: damage, spentMana: 15}
  }
}

const gameActions = {
  action1 : (callback) => {
    const warrior = callback(battleMembers);
    battleMembers.dragon.healthPoints -= warrior;
    battleMembers.warrior.damage = warrior;
  },
  action2 : (callback) => {
    const mage = callback(battleMembers)
    if (mage.spentMana !== 0) {
    battleMembers.dragon.healthPoints -= mage.damage;
    battleMembers.mage.mana -= mage.spentMana;
    battleMembers.mage.damage = mage.damage;
    } else {
      battleMembers.mage.damage = mage.damage;
    }
  },
  action3 : (callback) => {
    const dragon = callback(battleMembers); 
    battleMembers.mage.healthPoints -= dragon;
    battleMembers.warrior.healthPoints -= dragon;
    battleMembers.dragon.damage = dragon;
  },
  result : () => console.table(battleMembers)
};

const game = (rounds) => {
  for (let index = 0; index < rounds; index += 1) {
    gameActions.action1(warriorDamage);
    gameActions.action2(mageDamage);
    gameActions.action3(dragonDamage);
    gameActions.result();
  }
}

game(4)