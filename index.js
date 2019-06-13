class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^a-zA-Z0-9 '-]/g, '')
  }
  static titleize(string){
    let articles = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let capString = Formatter.capitalize(string)
    let newArray = capString.split(' ');
    let capArray = [];
    newArray.forEach(word => {
        if (articles.indexOf(word) === -1) { capArray.push(Formatter.capitalize(word))}
        else {capArray.push(word)}
    })
    return capArray.join(' ')
  }
}
