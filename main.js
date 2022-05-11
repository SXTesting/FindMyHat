//import all required module

const prompt = require('prompt-sync')({sigint: true});
const clear = require('clear-screen');
 
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const row = 10;
const col = 10;
let getRow = 0;
let getCol = 0;
var startRow = 0;
var startCol = 0;

class Field {
    
    field = [];

    constructor() {
        //this.field = field;
        this.locationX = 0;
        this.locationY = 0;

        for (let a = 0; a < row; a++) {
            this.field[a] = [];
        }

        this.generateField();
    }

    generateField() {
        for (let y = 0; y < row; y++) {
            for (let x = 0; x < col; x++) {
                this.field[y][x] = fieldCharacter;
            }
        }

        for (let numHoles = 0; numHoles < 26; numHoles++) {
            this.field[Math.floor(Math.random() * row)][Math.floor(Math.random() * col)] = hole;
        }
    
        //set the "hat" location
        do {
            getRow = Math.floor(Math.random() * row);
            getCol = Math.floor(Math.random() * col);
        }
        while (getRow == 0 && getCol == 0);

        this.field[getRow][getCol] = hat;

        //set character position as [0][0]
        this.field[startRow][startCol] = pathCharacter;
     
        if ((this.field[startCol][startRow]) == hole) {
            this.generateField();
        }
    }

    runGame() {
        //Implement your codes
        this.print();
        this.askQuestion();
    }

    print() {
        clear();
        const displayString = this.field.map(row => {
                return row.join('');
            }).join('\n');
        console.log(displayString);
    }

    askQuestion() {
        const answer = prompt('Which way? ').toUpperCase();
        //Implement your codes
        if (answer == 'R') {
            this.field[startCol][startRow] = fieldCharacter;
            startRow = startRow + 1;
            if (startRow > 9){
                console.log('Out of bounds - Game End!');
            }
            else if ((this.field[startCol][startRow]) == hole){
                console.log('Sorry, you fell down a hole!');
            }
            else if ((this.field[startCol][startRow]) == hat){
                console.log('Congrats, you found your hat!');
            }
            else {
                this.field[startCol][startRow] = pathCharacter;
                this.print();
                this.askQuestion();
            }
        }
        else if (answer == 'L') {
            this.field[startCol][startRow] = fieldCharacter;
            startRow = startRow - 1;
            if (startRow < 0){
                console.log('Out of bounds - Game End!');
            }
            else if ((this.field[startCol][startRow]) == hole){
                console.log('Sorry, you fell down a hole!');
            }
            else if ((this.field[startCol][startRow]) == hat){
                console.log('Congrats, you found your hat!');
            }
            else {
                this.field[startCol][startRow] = pathCharacter;
                this.print();
                this.askQuestion();
            }
        }
        else if (answer == 'U') {
            this.field[startCol][startRow] = fieldCharacter;
            startCol = startCol - 1;
            if (startCol < 0){
                console.log('Out of bounds - Game End!');
            }
            else if ((this.field[startCol][startRow]) == hole){
                console.log('Sorry, you fell down a hole!');
            }
            else if ((this.field[startCol][startRow]) == hat){
                console.log('Congrats, you found your hat!');
            }
            else {
                this.field[startCol][startRow] = pathCharacter;
                this.print();
                this.askQuestion();
            }
        }
        else if (answer == 'D') {
            this.field[startCol][startRow] = fieldCharacter;
            startCol = startCol + 1;
            if (startCol > 9){
                console.log('Out of bounds - Game End!');
            }
            else if ((this.field[startCol][startRow]) == hole){
                console.log('Sorry, you fell down a hole!');
            }
            else if ((this.field[startCol][startRow]) == hat){
                console.log('Congrats, you found your hat!');
            }
            else {
                this.field[startCol][startRow] = pathCharacter;
                this.print();
                this.askQuestion();
            }
        }
        else {
            this.askQuestion();
        }
    }
} // End of Class

const myfield = new Field();
myfield.runGame();

