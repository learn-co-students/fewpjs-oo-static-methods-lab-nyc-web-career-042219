class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(string){
    let words = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the']
    let strArr = string.split(" ");
    return strArr.map(word => {
      return (strArr.indexOf(word)===0 || !words.includes(word)) ? this.capitalize(word) : word
    }).join(" ")
  }
}