import {useState,useEffect } from "react"
import Link from "next/link"
import {useRouter} from "next/router"
import NavItem from "./NavItem"
const Navbar=()=>{
  const [activeItem,setActiveItem]=useState<string>("")
  const router=useRouter()
  const {pathname}=router
  useEffect(()=>{
    if(pathname==="/") setActiveItem("About")
    if(pathname==="/projects") setActiveItem("Projects")
    if(pathname==="/resume") setActiveItem("Resume")
  },[])
  return(
    <div className="flex flex-col sm:flex-row justify-between px-5 pb-2 items-center">
      <span className="font-bold  mt-6 sm:mt-0 order-2 sm:order-1 text-green text-2xl pb-1 border-b-4 border-gray-600">{activeItem}</span>
      <div className="flex justify-around flex-row order-1 sm:order-2  space-x-5">
        <NavItem
          name="About"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          route="/"
        />
        <NavItem
          name="Resume"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          route="/resume"
        />
        <NavItem
          name="Projects"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          route="/projects"
        />




      </div>

    </div>
  )
}
export default Navbar
