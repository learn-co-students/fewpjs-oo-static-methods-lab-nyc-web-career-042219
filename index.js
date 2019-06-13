class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-z0-9-'\s]/gi, '')
  }

  static titleize(string) {
    let words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let titleString = string.split(' ');
    return titleString.map(word => {
      return (!words.includes(word) || titleString.indexOf(word) === 0) ? this.capitalize(word) : word;
    }).join(' ');

  }
}
