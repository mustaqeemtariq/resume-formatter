import FileUpload from 'components/app/file-upload'
import { AppLayout } from 'components/app/layout'
import { useState } from 'react'
import resumeService from 'services/resume-service'

export const Home = () => {
	const [files, setFiles] = useState<File[]>([])

	const handleSubmit = () => {
		resumeService.uploadResume(files[0])
	}

	return (
		<AppLayout>
			<FileUpload
				name="resume-upload"
				allowMultiple={false}
				maximumAllowedFiles={1}
				files={files}
				onUpload={(file: File[]) => setFiles(file)}
			/>
			<button onClick={handleSubmit}>Send Resume</button>
		</AppLayout>
	)
}
