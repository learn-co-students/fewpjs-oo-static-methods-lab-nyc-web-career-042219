let excludedWords = ['the', 'a', 'an', 'but', 'and', 'for', 'at', 'by', 'from', 'of']

class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9 '-]/g, '');
  }

  static titleize(string) {
    let splitString = string.toLowerCase().split(' ');
    let newString = splitString.map(function(word) {
      if (word === splitString[0]) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        if (excludedWords.includes(word)) {
          return word
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
      } 
      }).join(" ")
      return newString
  }
}