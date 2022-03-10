import {languages,cssLibraries,databases} from "../data"
import Bar from "../components/Bar"
const Resume=()=>{
  return(
    <div className="p-4">
      <h4 className="mb-1 text-center text-2xl font-bold ">Education</h4>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
          <div>
            <p className="my-2 text-lg font-bold">Bacheler Of Arts</p>
            <p className="font-semibold text-sm">Viveakananda Mahavidyalaya (2016-2019)</p>
            <p className="my-2 text-sm"> I am graduated in B.A. in Geography from Viveakananda Mahavidyalaya at Haripal,Hooghly </p>
          </div>
          <div>
            <p className="my-2 text-base font-bold">‘A’ Level course in Information Technology under
                DOEACC Scheme
            </p>
            <p className="font-semibold text-sm my-2">National Institute of Electronics and Information Technology (NIELIT) </p>
            <p className="text-sm my-2">I am currently pursuing DOEACC A LEVEL course from NIELIT</p>
          </div>
      </div>
      <div className="mt-3 grid gap-4 md:grid-cols-2 grid-cols-1">
        <div>
          <h4 className="mb-1 text-center text-sm font-bold ">
            Programming Languages & Frameworks
          </h4>
          <div className="my-2">
            {
              languages.map((language,index)=>(
                <Bar data={language} key={index}/>
              ))
            }
          </div>
        </div>
        <div>
          <h4 className="mb-1 text-center text-sm font-bold ">
            Database Technologies
          </h4>
          <div className="my-2">
            {
              databases.map((database,index)=>(
                <Bar data={database} key={index}/>
              ))
            }
          </div>
        </div>
        <div>
          <h4 className="mb-1 text-center text-sm font-bold ">
            CSS FrameWorks
          </h4>
          <div className="my-2">
            {
              cssLibraries.map((cssLibrary,index)=>(
                <Bar data={cssLibrary} key={index}/>
              ))
            }
          </div>
        </div>
      </div>
  </div>
  )
}
export default Resume
