const templateToFollow =`{
    "personalInformation": {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "phone": "123-456-7890",
      "address": "123 Main Street, City, State, Zip",
      "summary": "A passionate professional with experience in...",
      "socialMedia": {
        "linkedin": "https://www.linkedin.com/in/johndoe",
        "twitter": "https://twitter.com/johndoe",
        "github": "https://github.com/johndoe"
      }
    },
    "education": [
      {
        "degree": "Bachelor of Science in Computer Science",
        "institution": "University Name",
        "location": "City, State",
        "graduationDate": "May 20XX"
      },
      {
        "degree": "High School Diploma",
        "institution": "High School Name",
        "location": "City, State",
        "graduationDate": "June 20XX"
      }
    ],
    "workExperience": [
      {
        "position": "Software Engineer",
        "company": "Tech Company XYZ",
        "location": "City, State",
        "startDate": "June 20XX",
        "endDate": "Present",
        "responsibilities": [
          "Developed and maintained...",
          "Collaborated with cross-functional teams..."
        ]
      },
      {
        "position": "Intern",
        "company": "ABC Startup",
        "location": "City, State",
        "startDate": "May 20XX",
        "endDate": "August 20XX",
        "responsibilities": [
          "Assisted in...",
          "Participated in..."
        ]
      }
    ],
    "skills": [
      {
        "category": "Programming Languages",
        "list": ["JavaScript", "Python", "Java"]
      },
      {
        "category": "Frameworks",
        "list": ["React", "Node.js", "Django"]
      },
      {
        "category": "Tools",
        "list": ["Git", "Docker", "VS Code"]
      }
    ],
    "certifications": [
      {
        "name": "Certified ScrumMaster (CSM)",
        "authority": "Scrum Alliance",
        "date": "June 20XX"
      },
      {
        "name": "AWS Certified Solutions Architect - Associate",
        "authority": "Amazon Web Services",
        "date": "August 20XX"
      }
    ],
    "languages": [
      {
        "language": "English",
        "proficiency": "Native"
      },
      {
        "language": "Spanish",
        "proficiency": "Intermediate"
      }
    ],
    "projects": [
      {
        "title": "Project Name 1",
        "description": "Developed a web application...",
        "technologiesUsed": ["React", "Node.js", "MongoDB"]
      },
      {
        "title": "Project Name 2",
        "description": "Implemented a machine learning model...",
        "technologiesUsed": ["Python", "TensorFlow", "Keras"]
      }
    ]
  }
  `
const message =
`Title: Extracted Text Analysis and Structuring into JSON
Description: I have extracted text from various sources and need assistance in structuring it into a JSON format for further processing. The extracted text contains details related to personal and professional information.
Instructions: generate a JSON structure based on the provided text. The JSON should be organized into the following pattern ${templateToFollow}:

Following is the criteria of Mapping data to Json:
1. Skills should Map to skills mentioned in the data.
2. Professional Experience should map to work experience mentioned in the data.
3. Name, email, contact and title should mapped accordingly.
4. Languages should map to the language.
5. Do not map wrong data. Like english to skill. Because english is a language not a skill. It is better to 
leave empty if you do not find relevant info in complete data.
Important Notes:
 1. Make sure only return Json response.
 2. If you do not find information against specific key, make the value of that key empty.
 3. It should be  proper JSON
 4. It's crucial to provide a response with a maximum of 2050 tokens in length.

 Text to analyze and create json from: 
`


  module.exports=message





















// const message= `Summarize the text below into a JSON object with exactly the following structure ${
    //     JSON.stringify({
        //       basic_info: {
            //         first_name: '',
            //         last_name: '',
            //         full_name: '',
            //         email: '',
            //         phone_number: '',
            //         location: '',
            //         portfolio_website_url: '',
            //         linkedin_url: '',
            //         github_main_page_url: '',
            //         university: '',
            //         education_level: '(BS, MS, or PhD)',
            //         graduation_year: '',
            //         graduation_month: '',
            //         majors: '',
            //         GPA: ''
            //       },
            //       work_experience: [
                //         {
                    //           job_title: '',
                    //           company: '',
                    //           location: '',
                    //           duration: '',
                    //           job_summary: ''
                    //         }
                    //       ],
                    //       project_experience: [
                        //         {
                            //           project_name: '',
                            //           project_description: ''
                            //         }
                            //       ]
                            //     })
                            //   }`;
                            
                            // const message=`Summarize the text below into a JSON object with exactly the following structure ${basic_info: {first_name, last_name, full_name, email, phone_number, location, portfolio_website_url, linkedin_url, github_main_page_url, university, education_level (BS, MS, or PhD), graduation_year, graduation_month, majors, GPA}, work_experience: [{job_title, company, location, duration, job_summary}], project_experience:[{project_name, project_description}]}`