class Formatter {
  //add static methods here
  static capitalize(word){
    return word[0].toUpperCase() + word.slice(1)
  }

  static sanitize(word){
    return word.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(line){
    let not = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = line.split(" ")
    let answer = []
    answer.push(this.capitalize(words[0]))
    words.slice(1).map(word => {
      if (not.includes(word)){
        answer.push(word)
      }else{
        answer.push(this.capitalize(word))
      }
    })

    return answer.join(" ")
  }
}
