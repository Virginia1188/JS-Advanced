class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalist = [];
    }
    addParticipant(participantName, participantGender) {
        if (!this.participants[participantName]) {

            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`;
        }
        return `${participantName} has already been added to the list`;
    }
    completeness(participantName, condition) {
        if (!this.participants[participantName]) {
            throw new Error(`${participantName} is not in the current participants list`);
        } else if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }
        const numOfDisciplines = Math.floor(condition / 30);
        if (numOfDisciplines < 3 ) {
            return `${participantName} could only complete ${numOfDisciplines} of the disciplines`;
        } else {
            this.listOfFinalist.push({ 
                participantName, 
                participantGender: this.participants[participantName] 
            });
            delete this.participants[participantName];
            return `Congratulations, ${participantName} finished the whole competition`;
        }
    }
    rewarding(participantName) {
        let index = this.listOfFinalist.find(f => f.participantName === participantName);
        if (index === undefined) {
            return `${participantName} is not in the current finalists list`;
        } else {
            return `${participantName} was rewarded with a trophy for his performance`;
        }

    }
    showRecord(criteria) {

        if (this.listOfFinalist.length === 0) {
            return 'There are no finalists in this competition';
        }
        if (criteria === 'male' || criteria === 'female') {
            let index = this.listOfFinalist.find(p => p.participantGender === criteria);
            if (!index) {
                return `There are no ${criteria}'s that finished the competition`;
            }
            return `${this.listOfFinalist[index].participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        }
        if (criteria === 'all') {
            let result = [`List of all ${this.competitionName} finalists:`];
            let sorted = this.listOfFinalist.sort((a, b) => a.participantName.localeCompare(b.participantName));
            for (const finalist of sorted) {
                result.push(finalist.participantName);
            }

            return result.join('\n');
        }
    }
}
const contest = new Triathlon("Dynamos");
console.log(contest.showRecord("all"));



