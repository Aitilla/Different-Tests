function reverseWords(str) {
    const reversed = str.split(' ').map((splitReverse)=> splitReverse.split('').reverse().join('')).join(' ')
    return reversed;
  }