class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g,'')
  }
  static titleize(string){
    let wordArray = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the']
    let array = string.split(' ')
    return array.map(word => {
      if (!wordArray.includes(word) || array.indexOf(word) === 0){
        return this.capitalize(word)
      } else {
        return word
      }
    }).join(' ')
  }
}

