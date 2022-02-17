import moment from 'moment'

export default {
  foo: function() { alert("foo!") },
	
	getDisplayDateOrTime: function(entries, key, format) { // TODO: optimize ?
		for (let i = 0; i < entries.length; i++) {
			entries[i][key] = moment(entries[i].date).format(format);
		}
	},
	findHashtags: function(string) {
		//eslint-disable-next-line
    let regexp = /\B\#\w\w+\b/g
    let result = string.match(regexp);
    return result;
	}
}