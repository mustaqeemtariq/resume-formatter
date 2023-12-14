const templateToFollow = `{
  "personalInformation": {
    "title": "Software Engineer",
    "fullName": "John Doe",
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
  "skillsAndTools": [
    "JavaScript",
    "Python",
    "Java"
  ],
  "workExperience": [
    {
      "position": "Software Engineer",
      "company": "Tech Company XYZ",
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
      "startDate": "May 20XX",
      "endDate": "August 20XX",
      "responsibilities": [
        "Assisted in...",
        "Participated in..."
      ]
    }
  ],
  "projects": [
    {
      "title": "Project Name 1",
      "description": "Developed a web application...",
      "technologiesUsed": [
        "React",
        "Node.js",
        "MongoDB"
      ]
    },
    {
      "title": "Project Name 2",
      "description": "Implemented a machine learning model...",
      "technologiesUsed": [
        "Python",
        "TensorFlow",
        "Keras"
      ]
    }
  ],
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
  ]
}`

export default class Constants {
  static TYPE_PDF = "application/pdf"
  static TYPE_DOC = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  static message =
    `Title: Extracted Text Analysis and Structuring into required JSON format 
  Description: I have extracted text from a candidate's resume and need assistance in structuring it into JSON format for further processing. The extracted text contains personal and professional information.
  
  Instructions: Generate a JSON structure based on the provided text. Organize the JSON according to the pattern specified in ${templateToFollow}. The criteria for mapping data to JSON keys are as follows:
  1. Map 'Skills' to Skills and Tools.
  2. Map 'Professional Experience' to the Work Experience.
  3. Map 'Name', 'Email', 'Contact', and 'Title' accordingly.
  4. Map 'Languages' to the language proficiency.
  5. Do not map incorrect data (e.g., mapping 'English' to a skill). If information is not found, leave the value empty.
  6. Map Summary, introduction to Career Summary.
  7. Map Projects to Project
  8. Map Eduction to Education
  Important Notes:
  1. Return only a JSON format response.
  2. If specific key information is not found, keep the value empty.
  3. Ensure the response is valid JSON.
  4. Limit the response to a maximum of 2050 tokens in length.
  
  Text to analyze and create JSON from:
  `
}