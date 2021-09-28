if(false){
    console.log('wait for the boxing day sale')
}else{
    console.log('remind me on 25th dec!')
}

// comparision operators

let hungerLevel = 7
if (hungerLevel>7){
    console.log('Time to eat')
}else{
    console.log('We can eat later')
}
// logical operators
let mood = 'sleepy'
let tierdnesslevel =10
if(mood=== 'sleepy' && tierdnesslevel>15){
    console.log('Time to sleep') 
}else{
    console.log('not bed time yet')
}

// truthy and falsy
let tool=''
let writingUtensil= tool || 'pen'
console.log(`The ${writingUtensil} is mighter than a sword.`);


// ternary operator ?
let isNightTime = true;
isNightTime ? console.log('turn on the lights') : console.log('Turn off the lights')

// else if statements
let season = 'summer'
if (season === 'spring'){
    console.log('it\'s spring!')

}
else if (season === 'fall')
{
console.log('leaves are falling')
}
else if(season==='winter')
{
console.log('it is winter')
}
else if(season==='summer')
{
console.log('it is summer')
}
else{
    console.log('Invalid season')
}

//switch
let season1 = 'winter';
switch (season1) {
    case 'summer' : 
    console.log('service AirCons!')
    break;

    case 'fall' : 
    console.log('visit public gardens')
    break;

    case 'winter' : 
    console.log('heaters ON')
    break;

    default : 
    console.log('invalid season')
    break;


}