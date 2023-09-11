import './style.css'



function incrementString(str) {
  const lastDigitIndex = str.lastIndexOf(str.match(/\d/));

  if (lastDigitIndex === -1) {

    return str + '1'
  }

  const prefix = str.substring(0, lastDigitIndex);
  const suffix = str.substring(lastDigitIndex);


  const incrementedNumber=(parseInt(suffix)+1).toString();

  const numDigitsToAdd = Math.max(0,suffix.length - incrementedNumber.length)
   
  const newSuffix = '0'.repeat(numDigitsToAdd)+incrementedNumber;

  const result=prefix + newSuffix;
   
  return result;

}


const inputStr=prompt('Enter a string :');



console.log('result :'+ incrementString(inputStr));