class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;

    }

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        } else {
            this.goals[peak] = Number(altitude);
            return `You have successfully added a new goal - ${peak}`;
        }
    }
    hike(peak, time, difficultyLevel) {
       
        if (!this.goals.hasOwnProperty(peak)) {
            return `${peak} is not in your current goals`;
        } 
        let usedResourses = time * 10;
        let difference = this.resources - usedResourses;
        if (this.goals.hasOwnProperty(peak) && this.resources === 0) {
            throw new Error('You don\'t have enough resources to start the hike');
        } else if (difference < 0) {
            return 'You don\'t have enough resources to complete the hike';
        }
        this.resources -= usedResourses;
        
        this.listOfHikes.push({peak,time,difficultyLevel});
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }
    rest(time) {
        let addedResources = time * 10;
        this.resources += addedResources;
        if (this.resources >= 100) {
            this.resources = 100;
            return 'Your resources are fully recharged. Time for hiking!';
        } else {
            return `You have rested for ${time} hours and gained ${addedResources}% resources`;
        }
    }
    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`;
        }
        if (criteria === 'hard' || criteria === 'easy') {
            let allByCriteria = this.listOfHikes.filter((a) => a.difficultyLevel === criteria);

            if (allByCriteria.length === 0) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }
            let bestHike = allByCriteria.sort((a, b) => a.time - b.time);
            return `${this.username}'s best ${criteria} hike is ${bestHike[0].peak} peak, for ${bestHike[0].time} hours`;
        }

        let allHikes = ['All hiking records:'];
        this.listOfHikes.forEach(h => allHikes.push(`${this.username} hiked ${h.peak} for ${h.time} hours`));
        return allHikes.join('\n');
    }
}
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));



