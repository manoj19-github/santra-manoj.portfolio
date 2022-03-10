import {useState,FunctionComponent,useEffect} from "react"
import {useRouter} from "next/router"
import Link from "next/link"
const NavItem:FunctionComponent<{
    activeItem:string,
    setActiveItem:Function,
    name:string,
    route:string
  }> = ({activeItem,name,route,setActiveItem})=>{


        return (
          activeItem !== name  ?(
          <Link href={route} passHref>
            <a>
              <span
               className="hover:text-green transition-all duration-700 linear"
               onClick={()=>setActiveItem(name)}>{name}</span>
            </a>
          </Link>):null

        )


}
export default NavItem
