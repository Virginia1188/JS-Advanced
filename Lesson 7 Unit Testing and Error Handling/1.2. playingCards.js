function playingCards(str1, str2) {

    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    if (!faces.includes(str1)) {
        throw new Error('Error');
    } else if (str2 in suits == false) {
        throw new Error('Error');
    }
    const result = {
        str1,
        str2,
        toString() {
            return this.str1 + suits[this.str2];
        }
    };
    return result;
}

const cards = [
    playingCards('A', 'S'),
    playingCards('10', 'H'),
];
console.log(cards.join('\n'));

