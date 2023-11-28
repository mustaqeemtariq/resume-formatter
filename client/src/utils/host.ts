let fallbackHost: string | undefined = 'localhost:5000'
let host = fallbackHost

let schemeForHttp = 'https://'

if (host === 'localhost:5000') {
	schemeForHttp = 'http://'
}

export const apiHost = schemeForHttp + host + '/api'
