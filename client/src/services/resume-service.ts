import axios from 'axios'
import { apiHost } from 'utils/host'

const uploadResume = (data: FormData) => {
	return axios
		.post(`${apiHost}/upload`, data, { headers: { 'Content-Type': `multipart/form-data` } })
		.then(response => response.data)
}

const resumeService = {
	uploadResume
}

export default resumeService
