//respond well 1:
const prompt = `Introduction:
With two years of hands-on experience as a software engineer, I specialize in C# .NET, Azure Functions, SQL databases, and proficient in React, Angular, and Node. My commitment to delivering high-quality, innovative solutions drives my npassion for staying at the forefront of the software development landscape.

name: 
ARBAZ CHAUDHARY
Software Engineer - I 

experience: 
SOFTWARE ENGINEER-I
CODE NINJA INC. Mar 2022  Present Lahore, Pakistan
At Code Ninja, as a C# and React developer for the Office Timeline project, I excel in leveraging Azure Functions, Azure Table and Blob Storage. I develop features, troubleshoot bugs, write unit tests, and actively participate in client calls.

TRAINEE FULL STACK DEVELOPER
CODE NINJA INC. Oct 2021  Feb 2022 Lahore, Pakistan
Received rigorous software development training, mastering teamwork, conflict management, and project management. 
Proficient in Agile methodologies, conducting sprint planning, daily stand-ups, and other scrum ceremonies. Revisited 
core programming concepts and completed a collaborative project using React, Node, and Express, with PostgreSQL, 
JIRA, and version control like Git/GitHub for code management.

projects: 
OFFICE TIMELINE ONLINE  Timeline Maker
Office Timeline is a project management software product of Codeninja Inc., integrated with Microsoft Excel/Project, 
Smartsheet and Jira. As a backend developer at Office Timeline Online, my responsibilities include,
• Implementation of new Features
• Writing APIs for Jira Integration
• Unit Test
• Bug Fixations
• Write Azure Functions
• Participate in Daily Scrum 
• Provide Team Support
• Attend Client Calls

OFFICE TIMELINE ONLINE  Timeline Maker
Office Timeline is a project management software product of Codeninja Inc., integrated with Microsoft Excel/Project, 
Smartsheet and Jira. As a backend developer at Office Timeline Online, my responsibilities include,
• Implementation of new Features
• Writing APIs for Jira Integration
• Unit Test
• Bug Fixations
• Write Azure Functions
• Participate in Daily Scrum 
• Provide Team Support
• Attend Client Calls

AUTOMATIC RETAIL CHECKOUT  Final Year Project
September 2020  July 2021
Automatically retail the items by using a simple image acquisition device coupled with a CNN identifier

education:
UNIVERSITY OF ENGINEERING AND TECHNOLOGY Lahore, Pakistan
Bachelor of Mechatronics and Control Engineering: 2017-2021

Extracurricular Experience:
AIESEC-Pakistan Lahore, Pakistan
Campus Brand Ambassador: Sep 2018- Sep 2019
EFE FOUNDATION. Lahore, Pakistan
Assistant Director: Feb 2018- Oct 2019

Certifications and Awards: 
COURSES. Lahore, Pakistan
 Essential JavaScript Training  LinkedIn Learning 
 Introduction to the Databases for Backend Development  Coursera 
ACADEMIC SCHOLARSHIPS. Lahore, Pakistan
 Received full merit-based academic scholarship from PEEF (2017-2021)
 Received full merit-based academic scholarship from DALDA (2016-2021)

skill:
C#, .NET, SQL, Azure Functions, Blob Storage, Azure Tables, JavaScript, React-Redux, Angular, HTML, 
CSS, Tailwind, NodeJS, NestJS and Express

Contact:
nwww.linkedin.com/in/arbazch/
www.github.com/ArbazCh
+92-305-9409869
arbazch1313@gmail.com
`
const message1 = `Title: Extracted Text Analysis and Structuring into JSON
Description: I have extracted text from various sources and need assistance in structuring it into a JSON format for further processing. The extracted text contains details related to personal and professional information.
Instructions: generate a JSON structure based on the provided text. The JSON should be organized into the following categories:
1. Bio Data
Name
Email
Address
Title
2. Skills
3. Education
4. Professional Experience
5. Projects
6. Introduction
Important Notes:
 1. Make sure only return Json response.
 2. If you do not find information against specific key, make the value of that key empty.
 3. It should be  proper JSON
 4. It's crucial to provide a response with a maximum of 2050 tokens in length.

 Text to analyze and create json from : ${prompt}
`


//No2.

const message2 =
`Title: Extracted Text Analysis and Structuring into JSON

Description: I have extracted text from various sources and need assistance in structuring it into a JSON format for further processing. The extracted text contains details related to personal and professional information.

Instructions:
Please generate a JSON structure based on the provided text. The JSON should be organized into the following categories:

1.Basic Info:

First Name
Last Name
Full Name (if available)
Email
Phone Number
Location
Portfolio Website URL
LinkedIn URL
GitHub Main Page URL
University
Education Level (BS, MS, or PhD)
Graduation Year
Graduation Month
Majors
GPA

2.Work Experience:

Job Title
Company
Location
Duration
Job Summary

3.Project Experience:

Project Name
Project Description
Additional Notes:

4. Skills


The provided text might contain various formats and structures, and the task is to identify and extract the necessary details to populate the JSON structure accordingly.
Please ensure the JSON structure follows the specified format and includes the requested information under each category.
Any additional insights or suggestions about the extracted information would be greatly appreciated.

Important Notes:
1. Make sure only return Json.stringyfy response with mentioned keys.
2. If you do not find information against specific key, make the value of that key empty.
3. It should be JSON.stringify Format.
4. It's crucial to provide a response with a maximum of 2050 tokens in length.

Thank you for your assistance!
Here is my provided text to extract the response in above format: 
`