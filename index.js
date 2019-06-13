class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^0-9a-z-'\s]/gi, '')
  }

  static titleize(string) {
    let words = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the'];
    let stringArr = string.split(' ');
    return stringArr.map(word => {
      return (!words.includes(word) || stringArr.indexOf(word) === 0) ? this.capitalize(word) : word;
    }).join(' ');
  }
}