import moment from 'moment'

export default {
  foo: function() { alert("foo!") },
	
	getDisplayDateOrTime: function(entries, key, format) { // TODO: optimize ?
		for (let i = 0; i < entries.length; i++) {
			entries[i][key] = moment(entries[i].date).format(format);
		}
	},
	findHashtags: function(string) {
		let matches = string.match(/#\w+/g) || [];
		//eslint-disable-next-line
    let result = matches.map(x => x.substr(1)) || [];
    return result;
	}
}