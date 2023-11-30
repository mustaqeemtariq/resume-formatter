import axios from 'axios'
import { apiHost } from 'utils/host'

const uploadResume = (data: FormData) => {
	axios
		.post(`${apiHost}/upload`, data, { headers: { 'Content-Type': `multipart/form-data` } })
		.then(res => console.log(res))
}

const resumeService = {
	uploadResume
}

export default resumeService
