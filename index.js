class Formatter {
	static capitalize(str) {
		return str[0].toUpperCase() + str.slice(1);
	}
	
	static sanitize(str) {
		return str.replace(/[^A-Za-z0-9-'\s]+/g, '');
	}

	static titleize(str) {
		let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
		let titleized = str.split(' ');
		return titleized.map( word => {
			if (!exceptions.includes(word) || titleized.indexOf(word) === 0) {
				return word[0].toUpperCase() + word.slice(1);
			} else {
				return word;
			}
		}).join(' ');
	}
}