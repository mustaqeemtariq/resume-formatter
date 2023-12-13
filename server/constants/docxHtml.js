import { Document, Paragraph, TextRun, AlignmentType, HeadingLevel, TabStopType, TabStopPosition, BorderStyle, WidthType } from "docx";

class DocumentCreator {
    create = (data) => {
        const document = new Document({
            sections: [
                {
                    children: [
                        new Paragraph({
                            text: data.personalInformation?.fullName || "",
                            heading: HeadingLevel.HEADING_1,
                            bold: true,
                        }),
                        new Paragraph({
                            text: data.personalInformation?.title || "",
                            heading: HeadingLevel.HEADING_2,
                            color: "CB2027",
                        }),
                        this.createCareerSummary(data.careerSummary),
                        this.createSkillsAndTools(data.skillsAndTools),
                        this.
                        createWorkExperience(data.workExperience),
                        this.createProjects(data.projects),
                        this.createEducation(data.education),
                        new Paragraph({
                            text: "Pre vetted by Codeninja Talent Cloud",
                            color: "white",
                            alignment: "center",
                            bold: true,
                            italics: true,
                            size: 18,
                        }),
                    ],
                },
            ],
        });

        return document;
    }

    createCareerSummary = (summary) => {
        return new Paragraph({
            children: [
                new TextRun({
                    text: "CAREER SUMMARY",
                    color: "white",
                    bold: true,
                }),
                new TextRun("\n"),
                new TextRun({
                    text: summary || "",
                    color: "4c6780",
                }),
            ],
            heading: HeadingLevel.HEADING_2,
            thematicBreak: {
                val: BorderStyle.SINGLE,
                color: "black",
                space: 1,
            },
        });
    }

    createSkillsAndTools = (skillsAndTools) => {
        return new Paragraph({
            children: [
                new TextRun({
                    text: "SKILLS AND TOOLS",
                    color: "white",
                    bold: true,
                }),
                new TextRun("\n"),
                new TextRun({
                    text: skillsAndTools || "",
                    color: "4c6780",
                }),
            ],
            heading: HeadingLevel.HEADING_2,
            thematicBreak: {
                val: BorderStyle.SINGLE,
                color: "black",
                space: 1,
            },
        });
    }

    createWorkExperience = (workExperience) => {
      const workExpParagraphs = workExperience.map((exp) => {
          const roleDetails = exp.responsibilities.join("\n");

          return new Paragraph({
              children: [
                  new TextRun({
                      text: exp.company || "",
                      bold: true,
                      color: "white",
                  }),
                  new TextRun({
                      text: `${exp.startDate} - ${exp.endDate || "Present"}`,
                      bold: true,
                      color: "white",
                  }),
                  new TextRun("\n"),
                  new TextRun({
                      text: exp.position || "",
                      bold: true,
                      color: "white",
                  }),
                  new TextRun("\n"),
                  new TextRun({
                      text: roleDetails,
                      color: "4c6780",
                  }),
              ],
              thematicBreak: {
                  val: BorderStyle.SINGLE,
                  color: "black",
                  space: 1,
              },
          });
      });

      return [
          new Paragraph({
              text: "WORK EXPERIENCE",
              heading: HeadingLevel.HEADING_2,
              bold: true,
              color: "white",
          }),
          ...workExpParagraphs,
      ];
  }

  createProjects = (projects) => {
      const projectParagraphs = projects.map((project) => {
          return new Paragraph({
              text: project || "",
              bullet: {
                  level: 0,
              },
          });
      });

      return [
          new Paragraph({
              text: "PROJECTS",
              heading: HeadingLevel.HEADING_2,
              bold: true,
              color: "white",
          }),
          ...projectParagraphs,
      ];
  }

  createEducation = (education) => {
      const eduParagraphs = education.map((edu) => {
          return new Paragraph({
              children: [
                  new TextRun({
                      text: edu.degree || "",
                      bold: true,
                      color: "white",
                  }),
                  new TextRun("\n"),
                  new TextRun({
                      text: edu.institution || "",
                      color: "4c6780",
                  }),
                  new TextRun("\n"),
                  new TextRun({
                      text: edu.graduationDate || "",
                      color: "4c6780",
                  }),
              ],
              thematicBreak: {
                  val: BorderStyle.SINGLE,
                  color: "black",
                  space: 1,
              },
          });
      });

      return [
          new Paragraph({
              text: "EDUCATION",
              heading: HeadingLevel.HEADING_2,
              bold: true,
              color: "white",
          }),
          ...eduParagraphs,
      ];
  }


}























// import { Document, Paragraph, TextRun, AlignmentType, HeadingLevel, TabStopType, TabStopPosition, BorderStyle, WidthType } from "docx";

// class DocumentCreator {
//     create = ([personalInformation, careerSummary, skillsAndTools, workExperience, projects, education]) => {

//       const document = new Document({
//             sections: [
//                 {
//                     children: [
//                         new Paragraph({
//                             text: `${personalInformation.fullName}`,
//                             heading: HeadingLevel.TITLE,
//                         }),
//                         this.createContactInfo(personalInformation?.phone, personalInformation?.socialMedia?.linkedin, personalInformation?.email),
//                         this.createHeading("Education"),
//                         ...education
//                             .map((education) => {
//                                 const arr = [];
//                                 arr.push(
//                                     this.createInstitutionHeader(
//                                         education.institution,
//                                         `${education.graduationDate}`
//                                     )
//                                 );
//                                 arr.push(
//                                     this.createRoleText(
//                                         `${education.degree}`
//                                     )
//                                 );
//                                 return arr;
//                             })
//                             .reduce((prev, curr) => prev.concat(curr), []),
//                         this.createHeading("Work Experience"),
//                         ...workExperience
//                             .map((position) => {
//                                 const arr = [];
//                                 arr.push(
//                                     this.createInstitutionHeader(
//                                         position.company,
//                                         this.createPositionDateText(
//                                             position.startDate,
//                                             position.endDate,
//                                             position.isCurrent
//                                         )
//                                     )
//                                 );
//                                 arr.push(this.createRoleText(position.responsibilities[0]));
//                                 return arr;
//                             })
//                             .reduce((prev, curr) => prev.concat(curr), []),
//                         this.createSubHeading("Skills and Tools"),
//                         this.createSkillList(skillsAndTools),
//                         this.createSubHeading("Projects"),
//                         ...this.createAchievementsList(projects),
//                         this.createHeading("Career Summary"),
//                         new Paragraph(`${careerSummary}`),
//                     ],
//                 },
//             ],
//         });

//         return document;
//     }

//     createContactInfo(phoneNumber, profileUrl, email) {
//         return new Paragraph({
//             alignment: AlignmentType.CENTER,
//             children: [
//                 new TextRun(
//                     `Mobile: ${phoneNumber} | LinkedIn: ${profileUrl} | Email: ${email}`
//                 ),
//                 new TextRun({
//                     text: "Address: 58 Elm Avenue, Kent ME4 6ER, UK",
//                     break: 1,
//                 }),
//             ],
//         });
//     }

//     createHeading(text) {
//         return new Paragraph({
//             text: text,
//             heading: HeadingLevel.HEADING_1,
//             thematicBreak: {
//                 val: BorderStyle.SINGLE,
//                 space: 1,
//                 color: "black",
//             },
//         });
//     }

//     createSubHeading(text) {
//         return new Paragraph({
//             text: text,
//             heading: HeadingLevel.HEADING_2,
//         });
//     }

//     createInstitutionHeader(institutionName, dateText) {
//         return new Paragraph({
//             tabStops: [
//                 {
//                     type: TabStopType.RIGHT,
//                     position: TabStopPosition.MAX,
//                 },
//             ],
//             children: [
//                 new TextRun({
//                     text: institutionName,
//                     bold: true,
//                 }),
//                 new TextRun({
//                     text: `\t${dateText}`,
//                     bold: true,
//                 }),
//             ],
//         });
//     }

//     createRoleText(roleText) {
//         return new Paragraph({
//             children: [
//                 new TextRun({
//                     text: roleText,
//                     italics: true,
//                 }),
//             ],
//         });
//     }

//     createSkillList(skills) {
//         return new Paragraph({
//             children: [
//                 new TextRun(skills.map((skill) => skill).join(", ") + "."),
//             ],
//         });
//     }

//     createAchievementsList(achievements) {
//         return achievements.map(
//             (achievement) =>
//                 new Paragraph({
//                     text: achievement.title,
//                     bullet: {
//                         level: 0,
//                     },
//                 })
//         );
//     }

//     createPositionDateText(startDate, endDate, isCurrent) {
//         const startDateText =
//             this.getMonthFromInt(startDate.month) + ". " + startDate.year;
//         const endDateText = isCurrent
//             ? "Present"
//             : `${this.getMonthFromInt(endDate.month)}. ${endDate.year}`;

//         return `${startDateText} - ${endDateText}`;
//     }

//     getMonthFromInt(value) {
//         switch (value) {
//             case 1:
//                 return "Jan";
//             case 2:
//                 return "Feb";
//             case 3:
//                 return "Mar";
//             case 4:
//                 return "Apr";
//             case 5:
//                 return "May";
//             case 6:
//                 return "Jun";
//             case 7:
//                 return "Jul";
//             case 8:
//                 return "Aug";
//             case 9:
//                 return "Sept";
//             case 10:
//                 return "Oct";
//             case 11:
//                 return "Nov";
//             case 12:
//                 return "Dec";
//             default:
//                 return "N/A";
//         }
//     }
// }


export default DocumentCreator










// const PHONE_NUMBER = "07534563401";
// const PROFILE_URL = "https://www.linkedin.com/in/dolan1";
// const EMAIL = "docx@com";

// const experiences = [
//   {
//     isCurrent: true,
//     summary:
//       "Full-stack developer working with Angular and Java. Working for the iShares platform",
//     title: "Associate Software Developer",
//     startDate: {
//       month: 11,
//       year: 2017,
//     },
//     company: {
//       name: "BlackRock",
//     },
//   },
//   {
//     isCurrent: false,
//     summary:
//       "Full-stack developer working with Angular, Node and TypeScript. Working for the iShares platform. Emphasis on Dev-ops and developing the continous integration pipeline.",
//     title: "Software Developer",
//     endDate: {
//       month: 11,
//       year: 2017,
//     },
//     startDate: {
//       month: 10,
//       year: 2016,
//     },
//     company: {
//       name: "Torch Markets",
//     },
//   },
//   {
//     isCurrent: false,
//     summary:
//       "Used ASP.NET MVC 5 to produce a diversity data collection tool for the future of British television.\n\nUsed AngularJS and C# best practices. Technologies used include JavaScript, ASP.NET MVC 5, SQL, Oracle, SASS, Bootstrap, Grunt.",
//     title: "Software Developer",
//     endDate: {
//       month: 10,
//       year: 2016,
//     },
//     startDate: {
//       month: 3,
//       year: 2015,
//     },
//     company: {
//       name: "Soundmouse",
//     },
//   },
//   {
//     isCurrent: false,
//     summary:
//       "Develop web commerce platforms for constious high profile clients.\n\nCreated a log analysis web application with the Play Framework in Java, incorporating Test Driven Development. It asynchronously uploads and processes large (2 GB) log files, and outputs meaningful results in context with the problem. \n\nAnalysis  and  development  of  the payment system infrastructure and user accounts section to be used by several clients of the company such as Waitrose, Tally Weijl, DJ Sports, Debenhams, Ann Summers, John Lewis and others.\n\nTechnologies used include WebSphere Commerce, Java, JavaScript and JSP.",
//     title: "Java Developer",
//     endDate: {
//       month: 10,
//       year: 2014,
//     },
//     startDate: {
//       month: 3,
//       year: 2013,
//     },
//     company: {
//       name: "Soundmouse",
//     },
//   },
// ];

// const education = [
//   {
//     degree: "Master of Science (MSc)",
//     fieldOfStudy: "Computer Science",
//     notes:
//       "Exam Results: 1st Class with Distinction, Dissertation: 1st Class with Distinction\n\nRelevant Courses: Java and C# Programming, Software Engineering, Artificial Intelligence, \nComputational Photography, Algorithmics, Architecture and Hardware.\n\nCreated a Windows 8 game in JavaScript for the dissertation. \n\nCreated an award-winning 3D stereoscopic game in C# using XNA.",
//     schoolName: "University College London",
//     startDate: {
//       year: 2012,
//     },
//     endDate: {
//       year: 2013,
//     },
//   },
//   {
//     degree: "Bachelor of Engineering (BEng)",
//     fieldOfStudy: "Material Science and Engineering",
//     notes:
//       "Exam Results: 2:1, Dissertation: 1st Class with Distinction\n\nRelevant courses: C Programming, Mathematics and Business for Engineers.",
//     schoolName: "Imperial College London",
//     startDate: {
//       year: 2009,
//     },
//     endDate: {
//       year: 2012,
//     },
//   },
// ];

// const skills = [
//   {
//     name: "Angular",
//   },
//   {
//     name: "TypeScript",
//   },
//   {
//     name: "JavaScript",
//   },
//   {
//     name: "NodeJS",
//   },
// ];

// const achievements = [
//   {
//     issuer: "Oracle",
//     name: "Oracle Certified Expert",
//   },
// ];


// const documentCreator = new DocumentCreator();
// const doc = documentCreator.create([
//   experiences,
//   education,
//   skills,
//   achievements,
// ]);

// const b64string = Packer.toBase64String(doc);

//export default b64string;