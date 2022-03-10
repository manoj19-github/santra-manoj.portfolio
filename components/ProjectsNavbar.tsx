import {FunctionComponent} from "react"
import {Category} from "../type"
export const NavItem:FunctionComponent<{value:Category,handleFilterCategory:Function,active:Category}>=({value,handleFilterCategory,active})=>{
  return <li className={`cursor-pointer hover:text-green capitalize transition-all duration-500 ease-in  ${value===active && "text-green"} `}
  onClick={()=>handleFilterCategory(value)}
  >{value}</li>

}
const ProjectsNavbar:FunctionComponent<{handleFilterCategory:Function,active:Category}>=(props)=>{
  return(
    <div className="flex space-x-3 lg:space-x-5 px-4 py-2 list-none overflow-auto ">
      <NavItem value="All" {...props}/>
      <NavItem value="React" {...props}/>
      <NavItem value="Express" {...props}/>
      <NavItem value="NextJs" {...props}/>
    </div>
  )
}

export default ProjectsNavbar
