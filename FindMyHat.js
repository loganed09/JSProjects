const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this._field = field;
    this.x = 0;
    this.y = 0;
    this.playing = true;
  }

  get field() {
    return this._field;
  }

  print(){
    const arrToString = this.field.map(row => {
      return row.join('')
    }).join('\n');
    console.log(arrToString);
  }

  isOutOfBounds() {
    return (this.x === -1 || this.x===this.field[0].length || this.y === -1 || this.y===this.field.length);
  }

  isHat() {
    return this.field[this.y][this.x] === hat;
  }

  isHole() {
    return this.field[this.y][this.x] === hole;
  }

  move(){
    const input = prompt('Please choose to move up, down, left or right. Using U, D, L, R accordingly: \n').toUpperCase();
    switch (input) {
      case 'U':
        this.y -= 1;
        break;
      case 'D':
        this.y += 1;
        break;
      case 'L':
        this.x -= 1;
        break;
      case 'R':
        this.x += 1;
        break;
      default:
        break;
    }
  }

  winGame() {
    let fieldLocation = this.field[this.y][this.x];
    if(this.isOutOfBounds()){
      console.log('You are out of bounds');
      this.playing = false;
    }else if (this.isHole()) {
      console.log('You fell in a hole');
      this.playing = false;
    }else if (this.isHat()) {
      console.log('You won, you found the hat');
      this.playing = false;
    }else {
      fieldLocation = pathCharacter;
    }
  }


  static generateField(height, width, percentage) {
    const fieldOrHole = percentage => {
      if (percentage >= 0 && percentage <= 100) {
        const ranNum = Math.random() * 100;
        if (ranNum < percentage) {
          return hole;
        }else {
          return fieldCharacter;
        }
      }else {
        console.log('Enter a percentage between 0 and 100');
      }
    }

    const plainField = () => {
      const makeWidthArray = () => {
        let widthArray = [];
        for (let i=0;i<width;i++) {
          widthArray.push(fieldOrHole(percentage));
        }
        return widthArray;
      }
      let plainField = [];
      for (let i=0; i<height; i++) {
        plainField.push(makeWidthArray());
      }
      return plainField;
    }
    const gameReadyField = plainField();

    do {
      gameReadyField[Math.floor(Math.random() * height)][Math.floor(Math.random()*width)] = hat;
    } while (gameReadyField[0][0] == hat);
    
    gameReadyField[Math.floor(Math.random()*height)][Math.floor(Math.random()*width)] = pathCharacter;

    return gameReadyField;
  }

  playGame() {
    while(this.playing) {
      this.print();
      this.move();
      
      if(this.isOutOfBounds()){
        console.log('You are out of bounds');
        this.playing = false;
        break;
      }else if (this.isHole()) {
        console.log('You fell in a hole');
        this.playing = false;
        break;
      }else if (this.isHat()) {
        console.log('You won, you found the hat');
        this.playing = false;
        break;
      }

      this.field[this.y][this.x] = pathCharacter;
    }
  }
}


const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

const myField2 = new Field(Field.generateField(20,20, 25));


myField2.playGame();

