let wins = 0;
let losses = 0;
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let guesses = [];
let max = 9
setValues();
function setValues(){
    document.getElementById("1").appendChild(document.createTextNode(wins))
    document.getElementById("2").appendChild(document.createTextNode(losses))
    document.getElementById("3").appendChild(document.createTextNode(max))
    document.getElementById("4").appendChild(document.createTextNode(guesses))
}



class Answer {
    constructor() {
        this.letter = '';
    }
    
    set() {
        this.letter = alphabet[Math.floor(Math.random() * alphabet.length)]
        
        
    }
    
    get() {
        return this.letter;

    }


}

let answer = new Answer();

    answer.set()

    window.addEventListener("keypress", event => {
    if (alphabet.includes(event.key) && event.key == answer.get())
    {
        wins++
        max = 9;
        guesses = [];
        setValues();
        alert("You are correct!");
        answer.set();
        
        
        
    }else
    if (event.key != answer.get() && max > 1)
    {
        guesses.pop(event.key);
        max--;
        setValues();
    }else if(max == 1)
    {
        losses++;
        setValues();
    }
        
        

    })





 

    
    


    

