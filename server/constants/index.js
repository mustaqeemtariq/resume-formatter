const message =
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



//const message = "Summarize the text below into a JSON with exactly the following structure {basic_info: {first_name, last_name, full_name, email, phone_number, location, portfolio_website_url, linkedin_url, github_main_page_url, university, education_level (BS, MS, or PhD), graduation_year, graduation_month, majors, GPA}, work_experience: [{job_title, company, location, duration, job_summary}], project_experience:[{project_name, project_description}]}"                 
// module.exports = message


// const basicInfo = {
//     first_name: 'x',
//     last_name: 'y',
//     full_name: 'xy',
//     email: 'xyz@gmail.com',
//     phone_number: '030235714',
//     location: 'xyz',
//     portfolio_website_url: 'xyz.com',
//     linkedin_url: 'xyz.com',
//     github_main_page_url: 'xyz.com',
//     university: 'xyz',
//     education_level: '(BS, MS, or PhD)',
//     graduation_year: '2015',
//     graduation_month: '03',
//     majors: 'CS',
//     GPA: '3.9'
//   };
  
//   const workExperience = [
//     {
//       job_title: 'x',
//       company: 'y',
//       location: 'xyz',
//       duration: '12',
//       job_summary: 'xyz'
//     }
//   ];
  
//   const projectExperience = [
//     {
//       project_name: 'abc',
//       project_description: 'acvfghh'
//     }
//   ];
  
//   const formattedJSON = {
//     basic_info: basicInfo,
//     work_experience: workExperience,
//     project_experience: projectExperience
//   };
  
//   const message = `Summarize the text below into a JSON with following criteria: 
//   1. Make sure it is only resume data. If it is not resume return the Message "This is not Resume".
//   2. It's crucial to provide a response with a maximum of 2050 tokens in length.
//   3.Generate a response in the form of an array of objects, with each object representing a meal. The entire array should be structured to match the output of the JSON.stringify method in JavaScript. Do not change the KEYS  of the json object  .The structure of object should be as follows: ${JSON.stringify(
//     formattedJSON)}.
//   4. Provide the output as a single-line, stringified JSON.Stringify without any spaces or line breaks. JSON Keys should be as it is just change the value
//      Output a single-line, spaceless JSON.Stringify that fits within GPT's token limit.
//   5. It should be JSON.stringify Format.`;

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