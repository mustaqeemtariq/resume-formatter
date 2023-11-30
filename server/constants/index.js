// const basicInfo = {
//     first_name: '',
//     last_name: '',
//     full_name: '',
//     email: '',
//     phone_number: '',
//     location: '',
//     portfolio_website_url: '',
//     linkedin_url: '',
//     github_main_page_url: '',
//     university: '',
//     education_level: '(BS, MS, or PhD)',
//     graduation_year: '',
//     graduation_month: '',
//     majors: '',
//     GPA: ''
//   };
  
//   const workExperience = [
//     {
//       job_title: '',
//       company: '',
//       location: '',
//       duration: '',
//       job_summary: ''
//     }
//   ];
  
//   const projectExperience = [
//     {
//       project_name: '',
//       project_description: ''
//     }
//   ];
  
//   const formattedJSON = {
//     basic_info: basicInfo,
//     work_experience: workExperience,
//     project_experience: projectExperience
//   };
  
//   const message = `Summarize the text below into a JSON object with exactly the following structure ${
//     JSON.stringify(formattedJSON)
//   }`;




const message = "Summarize the text below into a JSON object with exactly the following keys: first_name, last_name, full_name, email, phone_number, location, portfolio_website_url, linkedin_url, github_main_page_url, university, education_level (BS, MS, or PhD), graduation_year, graduation_month, majors, GPA}, work_experience: [job_title, company, location, duration, job_summary], project_experience:[project_name, project_description] : "                  
module.exports = message


















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