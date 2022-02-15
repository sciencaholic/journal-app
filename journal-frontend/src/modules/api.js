// import Vue from 'vue'
import axios from 'axios'


const client = axios.create({
  baseURL: "http://localhost:8081/", //process.env.BACKEND_BASE_URL // TODO: in env - webpack?
  json: true
})

export default {
  async execute (method, resource, data) {
    // inject the accessToken for each request
    // let accessToken = await Vue.prototype.$auth.getAccessToken()
    return client({
      method,
      url: resource,
      data,
      headers: {
        // Authorization: `Bearer ${accessToken}`
        // "content-type" : 'application/json',
				// "Access-Control-Allow-Origin": "*",
				// "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
				// "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
		}
    }).then(req => {
      return req.data
    })
  },
  getJournalEntries() {
    console.log ('API: getJournalEntries');
    return this.execute('get', '/journal')
  },
  getMoments() {
    console.log ('API: getMoments');
    return this.execute('get', `/moments`)
  },
  getTags(id) {
    console.log ('API: getTags');
    return this.execute('get', `/tags/${id}`)
  },
  createPost (data) {
    console.log ('API: createPost');
    return this.execute('post', '/posts', data)
  },
  // deletePost (id) {
  //   return this.execute('delete', `/posts/${id}`)
  // }
}