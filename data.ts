import {RiComputerLine} from "react-icons/ri"
import {IService,ISkill,Iproject,Category} from "./type"
import {FaServer} from "react-icons/fa"
import {AiOutlineApi} from "react-icons/ai"
import {MdDeveloperMode} from "react-icons/md"
import {BsCircleFill} from "react-icons/bs"
export const services:IService[]=[
  {
    title:"Frontend Development",
    about:"I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React</b>",
    Icon:RiComputerLine
  },
  {
    Icon:FaServer,
    title:"Backend Development",
    about:"handle database, server, api using <b>Express</b> framework"
  },
  {
    Icon:AiOutlineApi,
    title:"API Development",
    about:"I can develop robust API using REST API & <b>Node</b>"
  },
  {
    Icon:MdDeveloperMode,
    title:"DSA Learner",
    about:"a daily learner of different DSA concept using <b>GeeksForGeeks</b>"

  }

]

export const languages:ISkill[]=[
  {
    name:"Java Script",
    level:"80%",
    Icon:BsCircleFill
  },
  {
    name:"PHP",
    level:"70%",
    Icon:BsCircleFill
  },
  {
    name:"React",
    level:"83%",
    Icon:BsCircleFill
  },
  {
    name:"Node",
    level:"71%",
    Icon:BsCircleFill
  },
  {
    name:"Express",
    level:"69%",
    Icon:BsCircleFill
  },
  {
    name:"Next Js",
    level:"69%",
    Icon:BsCircleFill
  }
]
export const cssLibraries:ISkill[]=[
  {
    name:"Bootstrap",
    level:"79%",
    Icon:BsCircleFill
  },
  {
    name:"Tailwind",
    level:"71%",
    Icon:BsCircleFill
  },
  {
    name:"Sass",
    level:"74%",
    Icon:BsCircleFill
  }
]
export const databases:ISkill[]=[
  {
    name:"Mysql",
    level:"67%",
    Icon:BsCircleFill
  },
  {
    name:"Mongodb",
    level:"75%",
    Icon:BsCircleFill
  }
]
export const projects:Iproject[]=[
  {
    name:"Realtime Chat Application",
    description:"This app is completely MERN stack app for one to one and grouped user chat application",
    image_path:"/image/dosti-chat.jpg",
    deployed_url:"https://dosti-app.netlify.app",
    Fproject_url:"https://github.com/manoj19-github/dosti-chat-client",
    Bproject_url:"https://github.com/manoj19-github/dosti-chat-server",
    category:["React","Express"],
    key_tech:["React","Chakra UI","Redux","Express","Mongodb","Socket.io","JWT"]
  },
  {
    name:"Realtime pizza order tracker app",
    description:"Fully Functional Pizza Order Tracker Application, user can create his/her cart , order online payment through stripe and cash on delivery. User also get payment and order confirmation message through Gmail and SMS. There are also a admin panel presents admin can track user order and payment, a realtime commuication between users and admin are established by Socket.io",
    image_path:"/image/pizzahut.jpg",
    deployed_url:"https://pizzahut-2-client.vercel.app",
    Fproject_url:"https://github.com/manoj19-github/pizzahut-2-client",
    Bproject_url:"https://github.com/manoj19-github/pizzahut2-server",
    category:["NextJs","Express"],
    key_tech:["NextJs","Express","Mongodb","Socket.io","Tailwind Css","Redux","Passport","Nodemailer","Chart.js"]
  },
  {
    name:"YouTube Clone using Youtube Data API",
    description:"Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy SantraTube. User can like a video,comment on a video & Much More",
    image_path:"/image/santratube.jpg",
    deployed_url:"https://santratube12.web.app",
    Fproject_url:"https://github.com/manoj19-github/santratube-new",
    category:["React"],
    key_tech:["React","Redux","Firebase Auth","Youtube Data API","Sass","Bootstrap"]
  },
  {
    name:"Multi Authors NEWS Blogging Site ",
    description:"In this project user can create his/her own post and read his others post ",
    image_path:"/image/news24.jpg",
    deployed_url:"https://news24-blog-site.vercel.app",
    Fproject_url:"https://github.com/manoj19-github/news24-blog-site",
    Bproject_url:"https://github.com/manoj19-github/news24-backend",
    category:["NextJs","Express"],
    key_tech:["NextJs","Tailwind Css","JWT","Express","Mongodb","Redux"]
  },
  {
    name:"Figma To React UI",
    description:"In this project I Convert A Figma Design To react Landing Page",
    image_path:"/image/gpt3ai.jpg",
    deployed_url:"https://gpt3openai.herokuapp.com",
    Fproject_url:"https://github.com/manoj19-github/gpt3-ui-website",
    isFigma:"https://www.figma.com/file/lz9lLpFHMxHm2odnwM3R0z/gpt3?node-id=0%3A1",
    category:["React"],
    key_tech:["React","CSS"]
  },
  {
    name:"Figma To A Resturent Website Landing Page",
    description:"In this project I Convert A Figma Design To Resturent Website Landing Page",
    image_path:"/image/gericht.jpg",
    deployed_url:"https://gericht-2.netlify.app",
    Fproject_url:"https://github.com/manoj19-github/Gericht-resturent-from-figma",
    isFigma:"https://www.figma.com/file/yvClSI9AZBRX8UaaGEByF3/Modern-UI%2FUX%3A-Gericht?node-id=0%3A21",
    category:["React"],
    key_tech:["React","CSS"]
  },



]
