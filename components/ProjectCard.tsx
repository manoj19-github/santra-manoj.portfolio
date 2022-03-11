import {useState} from "react"
import {FunctionComponent} from "react"
import {Iproject} from "../type"
import Image from "next/image"
import {MdClose} from "react-icons/md"
const ProjectCard:FunctionComponent<{
  project:Iproject
}>=({project})=>{
  const [showDetails,setShowDetails]=useState(false)
  const handleClose=(e)=>{
    e.stopPropagation()
    setShowDetails(false)

  }
  return(
      <div onClick={()=>setShowDetails(true)} className="h-[13rem] max-h-auto border border-gray-400 bg-gray-300 dark:bg-dark-700  cursor-pointer rounded-md p-2">
        <div className="relative h-[74%]  w-full overflow-hidden rounded-md">
          <Image src={project.image_path} alt="project image" layout="fill" objectFit="fill"/>
        </div>
        <div className="text-[0.7rem] overflow-hidden flex justify-center items-center p-2">
          <p>{project.name}</p>
        </div>
        {
          showDetails && (
            <div className="grid md:grid-cols-2 absolute top-0 left-0  h-[90%] lg:h-[90%] lg:min-h-[27rem] z-[100] w-[100%] gap-5 border border-gray-200 p-2 md:p-4  rounded-lg dark:bg-black bg-white overflow-hidden cursor-default ">

                <div className="relative h-[10rem] lg:h-full rounded-lg overflow-hidden">
                  <Image src={project.image_path} layout="fill" objectFit="fill"/>
                </div>
                <div className="flex flex-col  justify-around lg:justify-evenly">
                  <p className="text-base lg:text-2xl  ">{project.name}</p>
                  <div className="flex flex-col md:flex-row  justify-between items-center text-sm text-white ">
                    <a className="p-1 rounded-sm bg-gray-700 mb-1 lg:my-2 md:my-0 text-sm" href={project.deployed_url}> Project </a>
                    <a className="p-1 rounded-sm bg-gray-700  lg:my-2 md:my-0 text-sm" href={project.Fproject_url}>{project?.Bproject_url ? <span>Frontend Code</span> :<span>Code</span> } </a>
                    {project?.isFigma && <a className="p-1 rounded-sm bg-gray-700 my-1 lg:my-2 md:my-0 text-sm" href={project.isFigma}>Figma Design</a>}
                    {project?.Bproject_url && <a className="p-1 rounded-sm my-1 lg:my-2 md:my-0 bg-gray-700 text-sm" href={project.Bproject_url}>Backend Code</a>}
                  </div>
                  <p className="text-sm  ">{project.description}</p>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-2 ">
                    {
                        project.key_tech.map((tech,index)=>(
                          <span className="rounded-sm text-center justify-items-center items-center bg-gray-400 dark:bg-dark-200"  key={index}>{tech}</span>
                        ))
                    }
                  </div>

                </div>
                <div className="absolute right-1 top-1 rounded-full bg-gray-500 p-[2px] cursor-pointer " onClick={(e)=>handleClose(e)}><MdClose fontSize={24} color="red"/></div>
              </div>


          )
        }

      </div>
  )
}
export default ProjectCard
