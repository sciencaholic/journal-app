import moment from 'moment'
import { createToast } from 'mosha-vue-toastify';

export default {
	content: {
		title: 'Chronicle',
		blurb: 'A place to jot down your thoughts.',
		logo_source: 'https://cdn-icons.flaticon.com/png/512/2688/premium/2688152.png?token=exp=1645453850~hmac=7a4d7d9826cab5dc99eae7e1446de777'
	},
	errorTexts: {
		"EMPTY_ENTRY_TEXT": "Please write something.",
		"SERVER_ERROR": "Oops! Something happened. Try refreshing the page."
	},
	toast: function(msg) {
		return createToast(msg, {
			hideProgressBar: true,
			toastBackgroundColor: '#1fb393'
		})
	},
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