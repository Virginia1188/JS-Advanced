/* eslint-disable no-undef */

function createAssemblyLine(myCar) {

    return {
        hasClima: (myCar) => {
            myCar.temp = 21;
            myCar.tempSettings = 21;
            myCar.adjustTemp = () => {
                if (myCar.temp < myCar.tempSettings) {
                    myCar.temp++;
                } else if (myCar.temp > myCar.tempSettings) {
                    myCar.temp--;
                }
            };
        },

        hasAudio: (myCar) => {
            myCar.currentTrack = {};
            myCar.nowPlaying = () => {
                console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`);
            };
        },

        hasParktronic: (myCar) => {
            myCar.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (0.1 <= distance && distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (0.25 <= distance && distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            };
        }
    };

}


const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
const assemblyLine = createAssemblyLine(myCar);

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
