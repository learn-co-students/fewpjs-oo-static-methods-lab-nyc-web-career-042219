class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^\w- ']+/g, "")
  }

  static titleize(string) {
    let first = this.capitalize(string.split(" ")[0])
    let words = string.split(" ").slice(1).map(word => {
      switch (word) {
      case "the":
      case "a":
      case "an":
      case "but":
      case "of":
      case "and":
      case "for":
      case "at":
      case "by":
      case "from":
        return word
      default:
        return this.capitalize(word)
      }
    }).join(" ")
    return first + " " + words
  }
}
