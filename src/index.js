module.exports = function toReadable (number) {
  let words = [
    [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    [' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  ]

      return hundreds_numbers(number).trim();
      function ones_numbers(number){
        if (!number % 10) {
          return;
        } else {
          return ' ' + words[0][number % 10]
        }
      }  
      function tens_numbers(number) {
        if (number < 10) {
          return words[0][number];
        } else if  (number >= 20 && number <= 99){
         return words[2][Math.floor(number / 10)] + ones_numbers(number);
        } else {
          return words[1][number - 10];
        }
       }
      function hundreds_numbers (number) {
        if (number === 0) {
          return 'zero';
        }
         else if (number >= 100) {
          return words[0][Math.floor(number/100)] + ' hundred' + ' ' + tens_numbers(Math.floor(number % 100));
        }
        else {
          return tens_numbers(number);
        }
      }     
     } 
    
     

