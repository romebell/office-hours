function printName() {
    return 'Rome';
}

console.log(printName());

// parameter
// console.log(nbaTeams[0]); // Bucks
// console.log(nbaTeams[3]); // Warriors

let car = 'Tesla';

const salesTax = 0.13;

function printTeams(array) {
    
    for (let i = 0; i < array.length; i++) { //['Bucks', 'Rockets', 'Lakers', 'Warriors']
        let eachTeam = array[i]; // Lakers
        
        console.log(eachTeam); 
    }
}

const nbaTeams = ['Bucks', 'Rockets', 'Lakers', 'Warriors'];
const nflTeams = ['Patriots', 'Bucs', 'Falcons', 'Chargers'];
const soccerTeams = ['team1', 'team2', 'team3', 'team4'];

// printTeams(nbaTeams);
// printTeams(nflTeams);
// printTeams(soccerTeams);


// print all teams with a length greater than 7
// function print7Teams(teamsArray) {
//     for (let i = 0; i < teamsArray.length; i++) {
//         let eachTeam = teamsArray[i];

//         if (eachTeam === 'Lakers') {
//             return eachTeam;
//         }
        
//     }
// }

// print7Teams(nbaTeams);

// make a variable that return a result based off a light
let light = 'yellow';
function stopLight(string) {
    if (string === 'green') {
        console.log('Go!');
    } else if (string === 'yellow') {
        console.log('Slow down!');
    } else if (string === 'red') {
        console.log('Stop!');
    }
}

stopLight('yellow');
stopLight('red');
stopLight('Green');

nbaTeams[0];

const sei713 = {
    steven: 'Steven Michaud',
    yoel: 'Yoel Morad',
    instructors: ['Taylor', 'Rome'],
    teachingAssistants: {
        pete: 'Pete',
        adam: 'Adam'
    },
    print: function() {
        console.log('No fking way.');
    }
};

// sei713.steven // Steven Michaud
// sei713.instructors // ['Taylor', 'Rome']
console.log(sei713.instructors[0][1]); // a
console.log(sei713.teachingAssistants.adam); // Adam
console.log(sei713.teachingAssistants.pete[1]); // e

sei713.print();
