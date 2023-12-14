import axios from 'axios'
import { apiHost } from 'utils/host'

const uploadResume = (data: FormData) => {
	return axios
		.post(`${apiHost}/upload`, data, { headers: { 'Content-Type': 'multipart/form-data' } })
		.then(response => response.data)
}

const getConvertedFile = (id: string) => {
	return axios({
		url: `${apiHost}/getFiles/${id}`,
		method: 'GET',
		responseType: 'blob'
	}).then(response => response.data)
}

const resumeService = {
	getConvertedFile,
	uploadResume
}

export default resumeService
