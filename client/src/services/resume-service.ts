import axios from 'axios'
import { apiHost } from 'utils/host'

const uploadResume = (data: File) => {
	axios.post(`${apiHost}/upload`, data).then(res => res.data)
}

const resumeService = {
	uploadResume
}

export default resumeService
