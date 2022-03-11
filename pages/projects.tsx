import {useState} from "react"
import {projects as projectsData} from "../data"
import ProjectCard from "../components/ProjectCard"
import ProjectsNavbar from "../components/ProjectsNavbar"
import {Category} from "../type"
const Project=()=>{
  const [projects,setProjects]=useState(projectsData)
  const [activeProjects,setActiveProjects]=useState<Category>("All")
  const handleFilterCategory=(category:Category)=>{
    if(category==="All"){
      setProjects(projectsData)
      setActiveProjects(category)
      return
    }
    const newArray=projectsData.filter(project=>project.category.includes(category))
    setProjects(newArray)
    setActiveProjects(category)
  }
  return(
    <div className="p-4 h-auto">
      <nav><ProjectsNavbar handleFilterCategory={handleFilterCategory} active={activeProjects}/></nav>
      <div className="grid grid-cols-12 gap-2 relative h-full max-h-full lg:min-h-[25.5rem] ">
      {
        projects.map((project,index)=>(
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 my-4  ">
            <ProjectCard project={project} key={index}/>
          </div>
        ))
      }
      </div>

    </div>
  )
}
export default Project
