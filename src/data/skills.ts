import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/javascript.svg",
      },
      {
        title: "Python",
        level: SkillLevel.Intermediate,
        icon: "/skills/python.png",
      },
      {
        title: "PHP",
        level: SkillLevel.Intermediate,
        icon: "/skills/php.png",
      },
      {
        title: "Golang",
        level: SkillLevel.Beginner,
        icon: "/skills/golang.png",
      },
      {
        title: "Node JS",
        level: SkillLevel.Beginner,
        icon: "/skills/nodejs.svg",
      },
    ],
  },
  {
    title: "Automation Testing",
    items: [
      {
        title: "Pytest Selenium",
        level: SkillLevel.Intermediate,
        icon: "/skills/pytest.svg",
      },
      {
        title: "Katalon Studio",
        level: SkillLevel.Intermediate,
        icon: "/skills/katalon.jpeg",
      },
      {
        title: "UFT One Automation",
        level: SkillLevel.Intermediate,
        icon: "/skills/UFT.svg",
      },
    ],
  },
  {
    title: "Engineer Testing",
    items: [
      {
        title: "JIRA",
        level: SkillLevel.Intermediate,
        icon: "/skills/jira.png",
      },
      {
        title: "Postman",
        level: SkillLevel.Intermediate,
        icon: "/skills/postman.svg",
      },
      {
        title: "Create and Execute Test Cases / Scenarios",
        level: SkillLevel.Expert,
        icon: "/skills/bugs.png",
      },
      {
        title: "Presentation and Reporting",
        level: SkillLevel.Intermediate,
        icon: "/skills/criteria.png",
      },
    ],
  },
  {
    title: "Performance Testing",
    items: [
      {
        title: "K6",
        level: SkillLevel.Intermediate,
        icon: "/skills/K6.png",
      },
      {
        title: "Artillery",
        level: SkillLevel.Intermediate,
        icon: "/skills/Artillery.jpeg",
      },
      {
        title: "JMeter",
        level: SkillLevel.Beginner,
        icon: "/skills/jmeter.png",
      },
    ],
  },
  {
    title: "Other Else",
    items: [
      {
        title: "Github",
        level: SkillLevel.Intermediate,
        icon: "/skills/github.svg",
      },
      {
        title: "Gitlab",
        level: SkillLevel.Intermediate,
        icon: "/skills/gitlab.svg",
      },
      {
        title: "Jenkins",
        level: SkillLevel.Intermediate,
        icon: "/skills/jenkins.svg",
      },
      {
        title: "Git",
        level: SkillLevel.Intermediate,
        icon: "/skills/git.svg",
      },
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Beginner,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/mysql.svg",
      },
    ],
  },
];

export default skills;
