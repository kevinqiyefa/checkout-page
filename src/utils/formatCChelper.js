function formatCreditCardNumber(unformattedNum) {
  return formattedCardInfo(unformattedNum, ' ', 4);
}

function formatExpirationDate(unformattedDate) {
  return formattedCardInfo(unformattedDate, '/', 2);
}

function formattedCardInfo(input, separator, patternLength) {
  input = input.replace(/[^(0-9)]/g, '');
  let pureNumber = input.split(' ').join('');
  let preNumArr = pureNumber.split('');
  let formattedNumArr = [];

  for (let i = 0; i < preNumArr.length; i++) {
    if (!preNumArr[i].match('^[0-9]*$')) {
      return;
    }
    if (i !== 0 && i % patternLength === 0) {
      formattedNumArr.push(separator);
    }
    formattedNumArr.push(preNumArr[i]);
  }
  return formattedNumArr.join('');
}
export { formatCreditCardNumber, formatExpirationDate };
