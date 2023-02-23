function solution(command) {

        const positiveVote = () => { this.upvotes ++;}; // is it obj.upvote or this.upvote?!?!?
        const negativeVote = () => {this.downvotes ++; };
        const score = () => { 
            let result = [];
            let balanceVotes = this.upvotes - this.downvotes;
            let totalVotes = this.upvotes + this.downvotes;
            
            if(totalVotes > 100){
                let greaterNum = 0;
                if(this.upvotes > this.downvotes){
                   greaterNum =  this.upvotes;
                }else{
                    greaterNum = this.downvotes;
                }
                let percentToAdd = Math.ceil(greaterNum * 0.25);
                result.push(this.upvotes + percentToAdd);
                result.push(this.downvotes + percentToAdd);
                
            }else{
                result.push(this.upvotes);
                result.push(this.downvotes);
            }
            result.push(balanceVotes);

            let positivePercentige = this.upvotes / totalVotes *100;

            if(positivePercentige > 66 && totalVotes > 10){
                result.push('hot');
            }else if(balanceVotes >= 0 && totalVotes > 100){
                result.push('controversial');
            }
            else if(balanceVotes < 0 ){
                result.push('unpopular');
            }else{
                result.push('new');
            }
            // console.log(result);
            return result;
        };
    
    if(command == 'upvote'){
       return positiveVote();
    }else if(command == 'downvote'){
       return negativeVote();
    }else if(command == 'score'){
        return score();
    }

}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
// solution.call(post, 'upvote');
// solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
