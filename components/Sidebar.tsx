import Image from "next/image"
import {AiFillGithub,AiFillLinkedin} from "react-icons/ai"
import {GoLocation} from "react-icons/go"
import {GiTie} from "react-icons/gi"
import {useTheme} from "next-themes"
const Sidebar=()=>{
  const {theme,setTheme}=useTheme()
  const changeTheme=()=>{
    setTheme(theme==="light"?"dark":"light")
  }
  return(
    <div className="px-5 sm:px-24 md:px-12 lg:px-1  ">
      <div className="w-full mt-2 h-[45vh] lg:h-36  rounded-2xl  relative overflow-hidden">
        <Image src="/81310508.jpg" layout="fill" objectFit="contain" alt="user Avatar"/>
      </div>
      <h3 className="mt-2 text-2xl font-medium tracking-wide flex w-min mx-auto lg:w-full justify-evenly space-x-2 font-lobster">
        <span className="text-green">Manoj </span>
        <span className="text-blue-500">Santra</span>
      </h3>
      <p className="px-2 bg-gray-200 dark:bg-dark-200 text-center py-1 my-2 bg-gray-300 rounded-full">Web Developer</p>
      <a href="/santra-manoj1.pdf" download
       className="py-1 px-1 mt-2 flex flex-row justify-center items-center w-full bg-gray-200 rounded-full flex justify-center lg:text-[0.7rem] bg-gray-300 dark:bg-dark-200 cursor-pointer">
        <GiTie className="w-6 h-6"/>
        <span>Download Resume</span>
      </a>
      <div className="flex my-3 w-full justify-between text-green w-9/12 md:w-full lg:w-full mx-auto">
        <a href="https://github.com/manoj19-github">
          <AiFillGithub className="w-8 h-8 cursor-pointer" target="_top"/>
        </a>
        <a href="https://www.linkedin.com/in/manoj-santra-38ab181ba" target="_top">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
        </a>
      </div>
      <div className="rounded-md flex py-2 my-2 text-center bg-gray-300 dark:bg-dark-200 flex-col " style={{marginLeft:"-1rem",marginRight:"-1rem"}} >
        <div className=" flex items-center justify-center  space-x-2">
          <GoLocation />
          <span>Hooghly, West Bengal</span>
        </div>
        <p className="lg:text-[0.8rem] my-2">santramanoj201@gmail.com</p>
        <p className="lg:text-[0.8rem] mb-1">9674327978</p>
      </div>
      <div className="flex flex-col">
        <button
          onClick={()=>window.open('mailto:santramanoj201@gmail.com',"new")}
        className="focus:outline-none w-8/12 lg:w-full mx-auto bg-gradient-to-r text-white from-green to-blue-600 my-3 py-2 rounded-full">
          Email Me
        </button>
        <button
          onClick={changeTheme}
          className="focus:outline-none w-8/12 lg:w-full mx-auto  bg-gradient-to-r text-white from-green to-blue-600 mt-1 py-2 rounded-full"
        >
          {theme==="light"?"Dark Mode":"Light Mode"}
        </button>
      </div>

    </div>
  )
}

export  default Sidebar
