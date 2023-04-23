class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {'child': 150, 'student': 300, 'collegian': 500};
        this.listOfParticipants = [];

    }
    registerParticipant (name, condition, money){
        if(this.priceForTheCamp.hasOwnProperty(condition) == false){
            throw Error('Unsuccessful registration at the camp.');
        }
        let index = this.listOfParticipants.find(p => p.name === name);
        console.log(index);
        if(index !== undefined){
            return `The ${name} is already registered at the camp.`;
        }
        if(this.priceForTheCamp[condition] > money){
            return 'The money is not enough to pay the stay at the camp.';
        }
            this.listOfParticipants.push({name, condition, power: 100, wins: 0});
            return `The ${name} was successfully registered.`;
        
    }

    unregisterParticipant (name){
        let index = this.listOfParticipants.map(p => p.name).indexOf(name);
       
        if(index === -1){
            throw Error(`The ${name} is not registered in the camp.`);
        }
            this.listOfParticipants.splice(index,1);
            return `The ${name} removed successfully.`;

    }

    timeToPlay (typeOfGame, participant1, participant2){
        let first = this.listOfParticipants.find(p=>p.name === participant1);
        let second = this.listOfParticipants.find(p=>p.name === participant2);
        if(first === undefined){
            throw Error('Invalid entered name/s.');
        }
        if(typeOfGame == 'WaterBalloonFights'){
            if(second === undefined){
                throw Error('Invalid entered name/s.');
            }else if(first.condition != second.condition){
                throw Error('Choose players with equal condition.');
            }
            if(first.power > second.power){
                first.wins ++;
                return `The ${first.name} is winner in the game ${typeOfGame}.`;
            }else if(first.power < second.power){
                second.wins ++;
                return `The ${second.name} is winner in the game ${typeOfGame}.`;
            }else{
                return 'There is no winner.';
            }
        }else{
            first.power += 20;
            return `The ${first.name} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString () {
        let result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        let sorted = this.listOfParticipants.sort((a,b) => b.wins - a.wins).forEach(p =>{
            result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`);
        });
        return result.join('\n');
    }

}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));








