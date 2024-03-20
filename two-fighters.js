function declareWinner(fighter1, fighter2, firstAttacker) {
  let fighter1Health = fighter1.health;
  let fighter2Health = fighter2.health;

  let play = true;
  let win = '';

  if (fighter1.toString() == firstAttacker) {
    while (play) {
      fighter2Health -= fighter1.damagePerAttack;
      if (fighter2Health <= 0) {
        win = fighter1.toString();
        break;
      }

      fighter1Health -= fighter2.damagePerAttack;
      if (fighter1Health <= 0) {
        win = fighter2.toString();
        break;
      }
    }
  } else {
    while (play) {
      fighter1Health -= fighter2.damagePerAttack;
      if (fighter1Health <= 0) {
        win = fighter2.toString();
        break;
      }

      fighter2Health -= fighter1.damagePerAttack;
      if (fighter2Health <= 0) {
        win = fighter1.toString();
        break;
      }
    }
  }

  return win;

}

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () { return this.name; }
}

const fighter1 = new Fighter("Lew", 10, 2);
const fighter2 = new Fighter("Harry", 5, 4);

console.log(declareWinner(fighter1, fighter2, 'Harry'));