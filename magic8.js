let userName = 'habeeb'
userName ? console.log(`hello ${userName}`) : console.log('hello')

let userQuestion = ''
console.log(`ask question to magic 8 ball : ${userQuestion}`);

let randomNumber = Math.floor(Math.random()*8)
console.log(randomNumber)
let eightBall = ''

switch(randomNumber){
    case 0:
    console.log('it is certain')
    break;

    case 1:
        console.log('it is decidedly so')
        break;

    case 2 :
            console.log('reply hazy try again')
            break;

    case 3 :
        console.log('cannot predict now')
        break;

    case 4 :
        console.log('do not count on it')
        break;

     case 5 :
         console.log('my sources say no')
         break;
         
     case 6 :
         console.log('outlook not so good')
         break;
         
      case 7 :
          console.log('signs point to yes')
          break;
      
       default :
       console.log('invalid number try between 0-7 numbers')
       break;
    }
