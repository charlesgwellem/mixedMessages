
// to store inspirational messages

let messageDatabase = {
    zodiac:["Aquarius", "Pisces", "Aries", "Taurus"],
    inspir:["You are good enough", "God loves you", "You can achieve", "You are blessed"],
    nonsense: ["zagadat", "isiabody", "nabokete", "nakambota"]
}

// to store final message
let finalMessage = [];

// generate the messages
const messageGenerator = () => {
    let rawMessage;
    for(message in messageDatabase){
        let index = Math.floor(Math.random()*(messageDatabase[message].length-1));
        if(message === 'zodiac'){
            rawMessage = messageDatabase[message][index]
            finalMessage.push(`Your astro sign is: ${rawMessage}`);
        }else if(message === 'inspir'){
            rawMessage = messageDatabase[message][index]
            finalMessage.push(`Your inspirational message is: ${rawMessage}`);
        } else if(message === 'nonsense'){
            rawMessage = messageDatabase[message][index]
            finalMessage.push(`Your nonsense message is: ${rawMessage}`);
        }
    }
    return finalMessage
}

// format the output message and print
const greeting = theFinalMessage => {
    console.log(theFinalMessage.join('\n'))
}

messageGenerator();

// call the greeting message
console.log(greeting(finalMessage));
