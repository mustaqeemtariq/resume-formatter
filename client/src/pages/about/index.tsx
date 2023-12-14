import { AppLayout } from 'components/app/layout'
import React from 'react'

export const About = () => {
	return (
		<AppLayout>
			<h1 className="mt-20 text-4xl font-bold mb-10">Welcome to our Resume Formatter!</h1>
			<p className="text-black text-md text-justify">
				Welcome to our <span className="font-bold">Resume Formatter!</span> Our web utility offers a
				seamless solution to transform your existing resume in PDF or DOC format into a polished
				resume that adheres to a specific layout and format. With just a few clicks, you can upload
				your resume file, and our tool will intelligently convert it into the desired format (docx).
				Our aim is to streamline the process, allowing you to focus on your content while ensuring a
				professional presentation. Whether you're applying for a job, updating your professional
				profile, or simply revamping your resume, our converter simplifies the task by maintaining
				the integrity of your content while adjusting the layout to fit the specified format.
				Experience the convenience of effortlessly transforming your resume to meet your preferred
				style and layout. Try our Resume Formatter today and take the next step towards your career
				goals!
			</p>
		</AppLayout>
	)
}
