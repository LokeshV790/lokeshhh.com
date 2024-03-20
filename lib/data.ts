import dvstar from "@/public/dvstar.png";
import jobs from "@/public/jobs.jpg";
import stock from "@/public/stock.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const projectsData = [
  {
    title: "JobsGo",
    description:
      "Streamlining job searches with style. Discover, apply, and save jobs effortlessly. Powered by React Native, Expo, and the JSearch API, it's your sleek companion for a modern job hunt and a user-friendly experience,",
    tags: ["React Native", "MongoDB", "Tailwind", "JSearch API"],
    imageUrl: jobs,
  },
  {
    title: "Stocky-predy",
    description:
      "The Stock Market Prediction App is a web application built using Streamlit, yfinance, & visualizes the raw stock data along with forecasted data using Facebook Prophet.",
    tags: ["Streamlit", "Python", "Prophet"],
    imageUrl: stock,
  },
  {
    title: "</Dev>Star",
    description:
      "A Comprehensive Developer Toolkit. Maximize your efficiency and productivity as a developer with our free online developer toolkit.",
    tags: ["Sevlte.Js", "Tailwind"],
    imageUrl: dvstar,
  },
] as const;

export const languages = [
  "Java",
  "Python",
  "C++",
  "JavaScript",
  "TypeScript",
] as const;

export const frameWorks = [
  "Springboot",
  "Java EE/SE",
  "JSP",
  "Servelts",
  "React.js",
  "Node.js",
  "Django",
  "Next.js",
  "PyTorch",
  "Pandas",
  "Numpy",
  "Tensorflow",
] as const;

export const dataBase = [
  "MySQL",
  "PostgreSQL",
  "MongoDB (NoSQL)",
  "Oracle",
] as const;

export const others = [
  "Data Structures and Algorithms",
  "OOP",
  "Agile methodologies",
  "Problem-solving skills",
  "Design patterns",
  "Software development lifecycle",
  "Effective communication skills",
] as const;
