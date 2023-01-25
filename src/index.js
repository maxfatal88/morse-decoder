const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    'space': ' ',   
};

function decode(expr) {
    let word = '';
    let temp10Char = '';
    for(let i =0; i<expr.length; i= i +10) {
      let morseString = ''; 
      temp10Char = expr.slice(i, i+10);
        for(let k=0; k <temp10Char.length; k=k+2){
          if (( temp10Char.slice(temp10Char.length -2 -k, temp10Char.length -k)) === '11') {
              morseString =  '-' + morseString
          }
             else if(( temp10Char.slice(temp10Char.length -2 -k, temp10Char.length -k)) === '10') {
                morseString = '.' + morseString 
              }
                 else if (( temp10Char.slice(temp10Char.length -2 -k, temp10Char.length -k)) === '**') {  
                morseString = morseString + 'space'
                k=k+8;
                 }
          }
          word += MORSE_TABLE[morseString];   
        }
          return word;
    }


module.exports = {
    decode
}



