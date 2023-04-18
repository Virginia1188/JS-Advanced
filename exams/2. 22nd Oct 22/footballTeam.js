class footballTeam{
    constructor(clubName,country){
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers){
        let invited = [];
        for (const player of footballPlayers) {
            let [name,age,value] = player.split('/');
            age = Number(age);
            value = Number(value);
            let index = this.invitedPlayers.map(p => p.name).indexOf(name);
            if(index == -1){
                let current = {
                    name,
                    age,
                    value
                };
                this.invitedPlayers.push(current);
                invited.push(name);
            }else{
                this.invitedPlayers[index].value < value ? this.invitedPlayers[index].value = value : '';
            }
        }
        return `You successfully invite ${invited.join(', ')}.`;
    }
    signContract(selectedPlayer){
        let [name,playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);
        let index = this.invitedPlayers.map(p => p.name).indexOf(name);
        if(index == -1){
            throw new Error(`${name} is not invited to the selection list!`);
        }else if(this.invitedPlayers[index].value > playerOffer){
            let priceDif = this.invitedPlayers[index].value - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDif} million more are needed to sign the contract!`);
        }
        this.invitedPlayers[index].value = 'Bought';
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }
    ageLimit(name,age){
        let index = this.invitedPlayers.map(p => p.name).indexOf(name);
        if(index == -1){
            throw new Error(`${name} is not invited to the selection list!`);
        }else if(this.invitedPlayers[index].age < age){
            let ageDif = age - this.invitedPlayers[index].age;

            if(ageDif < 5){
                return `${name} will sign a contract for ${ageDif} years with ${this.clubName} in ${this.country}!`;
            }else{
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        }
        return `${name} is above age limit!`;

    }
    transferWindowResult(){
        let result = ['Players list:'];
        let sorted = this.invitedPlayers.sort((a,b) => a.name.localeCompare(b.name));

        for (const player of sorted) {
            let current = `Player ${player.name}-${player.value}`;
            result.push(current);
        }
        
        return result.join('\n');
    }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());




