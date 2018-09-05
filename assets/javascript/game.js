let wins = 0;
let losses = 0;
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let guesses = [];
let max = 9

let item1 = document.createTextNode(wins);
let item2 = document.createTextNode(losses);
let item3 = document.createTextNode(max);
let item4 = document.createTextNode(guesses);
document.getElementById("1").appendChild(item1)
document.getElementById("2").appendChild(item2)
document.getElementById("3").appendChild(item3)
document.getElementById("4").appendChild(item4)












class Answer {
    constructor() {
        this.letter = '';
    }
    
    set() {
        this.replace();
        this.letter = alphabet[Math.floor(Math.random() * alphabet.length)]
        max = 9;
        guesses = []
        
        
    }
    
    get() {
        return this.letter;

    }

    replace()
    {
        document.getElementById("1").firstChild.nodeValue = `Wins: ${wins}`;
        document.getElementById("2").firstChild.nodeValue = `Losses: ${losses}`;
        document.getElementById("3").firstChild.nodeValue = `Guesses Left: ${max}`;
        document.getElementById("4").firstChild.nodeValue = `Guesses so Far: ${guesses}`;

    }

}

let answer = new Answer();

    answer.set()

    window.addEventListener("keypress", event => {
    if (alphabet.includes(event.key) && event.key == answer.get())
    {
        wins++
        answer.replace()
        alert("You are correct!");
        answer.set();
        
        
        
    }else
    if (event.key != answer.get() && max > 1)
    {
        guesses.push(event.key);
        max--;
        answer.replace();
        
    }else if(max == 1)
    {
        max--
        losses++;
        alert("New Game!");
        answer.set();
        answer.replace();
        
        
    }
        
        

    })





 

    
    


    

