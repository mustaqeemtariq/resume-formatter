export default class CreateDocument {
    create = ([personalInformation, careerSummary, skillsAndTools, workExperience, projects, education]) => {
        const htmlString = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body style="box-sizing: border-box; margin: 0px; padding: 30px">
    <div>
      <h1 style="font-weight: 900">${personalInformation?.fullName}</h1>
      <h2 style="color: #CB2027">${personalInformation?.title}</h2>
      <div
        style="border-bottom: 4px solid black; height: 1px; width: 100%"
      ></div>
      <div
        style="
          display: flex;
          align-items: flex-start;
          column-gap: 20px;
          margin-top: 20px;
          font-size: 14px;
          font-weight: bolder;
        "
      >
        <div
          style="
            flex-basis: 30%;
            background-color: #CB2027;
            color: white;
            text-align: center;
            width: fit-content;
          "
        >
          <h2>CAREER SUMMARY</h2>
        </div>
        <div
          style="
            flex-basis: 70%;
            display: flex;
            align-items: center;
            column-gap: 5px;
          "
        >
          <div style="width: 15px; height: 8px; background-color: #CB2027"></div>
          <p style="margin: 0px; color: #4c6780">
            ${careerSummary}
          </p>
        </div>
      </div>
      <div
        style="
          display: flex;
          align-items: flex-start;
          column-gap: 20px;
          margin-top: 40px;
          font-size: 14px;
          font-weight: bolder;
        "
      >
        <div
          style="
            flex-basis: 30%;
            background-color: #CB2027;
            color: white;
            text-align: center;
            width: fit-content;
          "
        >
          <h2>SKILLS AND TOOLS</h2>
        </div>
        <div
          style="
            flex-basis: 70%;
            display: flex;
            align-items: center;
            column-gap: 5px;
          "
        >
          <div style="width: 15px; height: 8px; background-color: #CB2027"></div>
          <p style="margin: 0px; color: #4c6780">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            ullam dolore delectus hic at debitis ea eius ratione illum odit enim
            esse, porro soluta. Eligendi, dignissimos repellat. Eum, repellendus
            fugiat?
          </p>
        </div>
      </div>
      <div
        style="
          display: flex;
          align-items: flex-start;
          column-gap: 20px;
          margin-top: 40px;
        "
      >
        <div
          style="
            flex-basis: 30%;
            background-color: #CB2027;
            color: white;
            font-size: 14px;
            font-weight: bolder;
            text-align: center;
            width: fit-content;
          "
        >
          <h2>WORK EXPERIENCE</h2>
        </div>
        <div
          style="
            flex-basis: 70%;
            display: flex;
            flex-direction: column;
            row-gap: 15px;
          "
        >
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <h3 style="margin: 0px">Strategic Systems International</h3>
            <h3 style="margin: 0px">Mar - 2022 - Present</h3>
          </div>
          <div>
            <h4 style="margin: 0px">Senior Software Engineer</h4>
            <div style="display: flex; align-items: center; column-gap: 5px">
              <div
                style="width: 15px; height: 8px; background-color: #CB2027"
              ></div>
              <p style="margin: 0px; color: #4c6780">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi ullam dolore delectus hic at debitis ea eius ratione
                illum odit enim esse, porro soluta. Eligendi, dignissimos
                repellat. Eum, repellendus fugiat?
              </p>
            </div>
          </div>
        </div>
      </div>
 
      <div
        style="
          display: flex;
          align-items: flex-start;
          column-gap: 20px;
          margin-top: 40px;
        "
      >
        <div
          style="
            flex-basis: 30%;
            background-color: #CB2027;
            color: white;
            font-size: 14px;
            font-weight: bolder;
            text-align: center;
            width: fit-content;
          "
        >
          <h2>PROJECTS</h2>
        </div>
        <div
          style="
            flex-basis: 70%;
            display: flex;
            flex-direction: column;
            row-gap: 15px;
          "
        >
          <h4>Cloudbeavers</h4>
        </div>
      </div>
 
      <div
        style="
          display: flex;
          align-items: flex-start;
          column-gap: 20px;
          margin-top: 40px;
          margin-bottom: 45px;
        "
      >
        <div
          style="
            flex-basis: 30%;
            background-color: #CB2027;
            color: white;
            font-size: 14px;
            font-weight: bolder;
            text-align: center;
            width: fit-content;
          "
        >
          <h2>EDUCATION</h2>
        </div>
        <div
          style="
            flex-basis: 70%;
            display: flex;
            flex-direction: column;
            row-gap: 15px;
          "
        >
          <h4 style="margin: 0">Bachelors</h4>
          <p style="color: #4c6780; margin: 0">Virtual University</p>
          <p style="color: #4c6780; margin: 0">2018</p>
        </div>
      </div>
 
      <div style="position: fixed; bottom: 0px; font-size: 18px; width: 100%; padding: 20px; color: white; text-align: center; background-color: #CB2027;">
        Pre vetted by Codeninja Talent Cloud
      </div>
    </div>
    <div></div>
  </body>
</html>
`;
        return htmlString
    }
}
