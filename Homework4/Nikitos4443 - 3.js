let ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"]
class Warrior{
    constructor(experience = 100) {
        this.exp = experience
        this.ach = []
    }
    level(){
        if(this.exp > 10000)
            this.exp = 10000;
        return Math.floor(this.exp / 100)
    }
    experience(){
        if(this.exp > 10000)
            this.exp = 10000;
        return this.exp
    }
    rank(){
        return ranks[this.getRank()]
    }
    getRank() {
       switch(true){
           case this.level() > 0 && this.level() < 10:
               return 0
           case this.level() > 9 && this.level() < 20:
               return 1
           case this.level() > 19 && this.level() < 30:
               return 2
           case this.level() > 29 && this.level() < 40:
               return 3
           case this.level() > 39 && this.level() < 50:
               return 4
           case this.level() > 49 && this.level() < 60:
               return 5
           case this.level() > 59 && this.level() < 70:
               return 6
           case this.level() > 69 && this.level() < 80:
               return 7
           case this.level() > 79 && this.level() < 90:
               return 8
           case this.level() > 89 && this.level() < 100:
               return 9
           case this.level() === 100:
               return 10
           default:
               return "It is not a correct level"
       }
    }

    achievements(){
        return this.ach;
    }
    battle(opponentLvl) {
        if (opponentLvl > 100 || opponentLvl < 1) {
            return "Invalid level";
        }
        let opponent = new Warrior(opponentLvl*100);

        if (opponent.getRank() > this.getRank() && opponent.level() - this.level() >= 5) {
            return "You've been defeated";
        }


        let diff = Math.abs(opponentLvl - this.level())

        if(opponentLvl < this.level() && diff > 1) {
            return "Easy fight"

        } else if(opponentLvl < this.level() && diff === 1){
            this.exp += 5;
            return "A good fight"

        } else if(opponentLvl === this.level()){
            this.exp += 10
            return "A good fight"

        } else if(opponentLvl > this.level()){
            this.exp += 20 * diff**2
            return "An intense fight"
        }
    }
    training([description, experience, minLvl]){
        if(minLvl > this.level())
            return "Not strong enough"

        this.exp += experience;
        this.ach.push(description);
        return description;
    }

}
let chel = new Warrior()
console.log(chel.battle(5))
console.log(chel.experience())
console.log(chel.battle(3))




