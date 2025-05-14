import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Web & Back End Development",
    icons: [
      "/skills/nodejs.svg",
      "/skills/html.svg",
      "/skills/github.svg",
      "/skills/mongodb.svg",
      "/skills/mysql.svg",
    ],
    shortDescription:
      "-",
    description:
      "Experienced in designing and developing web applications with a focus on performance, maintainability, and security. Proficient in using Node.js for server-side logic, HTML for structuring content, and GitHub for version control and collaboration. Skilled in working with both SQL (MySQL) and NoSQL (MongoDB) databases, enabling flexible and robust data management. Able to build RESTful APIs, manage backend architecture, and deploy services efficiently.",
  },
  {
    id: 2,
    title: "Testing Automation",
    icons: [
      "/skills/pytest.svg",
      "/skills/UFT.svg",
      "/skills/katalon.jpeg",
    ],
    shortDescription: "-",
    description:
      "I have experience creating automated test scripts for web, mobile, and Android TV platforms using Pytest and Python. I use Jenkins to schedule and run tests automatically, helping to save time and improve accuracy. For API testing, I create automation with Postman, and for performance testing, I use K6 and JMeter to check how systems perform under load. I also have experience using UFT One with VBScript to automate complex business processes. My focus is on making testing faster, reducing bugs, and helping teams deliver better products through reliable automation.",
  },
  {
    id: 3,
    title: "Testing Engineer",
    icons: [
      "/skills/jira.png",
      "/skills/postman.svg",
      "/skills/bugs.png",
      "/skills/criteria.png",
    ],
    shortDescription: "-",
    description:
      "I have strong experience in manual testing for web, Android, and iOS applications. I create test cases, test scenarios, and run tests to check functionality, UI, and overall user experience. I handle bug reporting using JIRA, and I also support UAT (User Acceptance Testing) by preparing test data, presenting results, and working closely with developers and product teams to fix issues. As a testing engineer, I help ensure every feature works as expected before release, and I often collaborate across teams to meet project goals and improve product quality.",
  },
  {
    id: 4,
    title: "Testing Performance",
    icons: [
      "/skills/K6.png",
      "/skills/Artillery.jpeg",
      "/skills/jmeter.png",
    ],
    shortDescription:
      "-",
    description:
      "I have experience in performance testing using tools like K6 and JMeter to check how systems perform under heavy load and high traffic. I create test scripts to simulate multiple users accessing the application at the same time, helping to identify slow responses, bottlenecks, and potential failures. This testing helps ensure that the system stays stable and responsive even under pressure, especially before major releases. I also analyze test results to provide recommendations for improving speed and system performance.",
  },
  {
    id: 5,
    title: "Product Strategy",
    icons: [
      "/skills/git.svg",
      "/images/collaboration.png",
      "/images/logical-thinking.png",
      "/images/analytical-skills.png",
      "/skills/ubuntu.png",
    ],
    shortDescription:
      "-",
    description:
      "I collaborate to define clear goals, target audiences, and a success roadmap. My expertise in product ideation and market analysis ensures your product meets user needs and aligns with your business strategy for long-term growth and full potential realization. Drive your product's success with strategic planning.",
  },
];

export default services;
