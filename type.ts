import {IconType} from "react-icons"

export interface IService{
  title:string,
  about:string,
  Icon:IconType
}

export interface ISkill{
  name:string,
  level:string,
  Icon:IconType
}
export type Category="All"|"React"|"Express"|"NextJs"
export interface Iproject{
  name:string,
  description:string,
  image_path:string,
  deployed_url:string,
  Fproject_url:string,
  Bproject_url?:string,
  isFigma?:string,
  category:Category[],
  key_tech:string[]
}
