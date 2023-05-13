import Head from 'next/head'
import Image from 'next/image'
import {GetStaticPropsContext} from "next"
import {services} from "../data"
import ServiceCard from "../components/ServiceCard"
export default function Home() {
  console.log(services)
  return (
    <div className="">
      <div className="flex flex-col px-2 lg:px-6 pt-2 flex-grow">
        <p className="mt-3 font-medium mb-3">
           I have 1 year of experience in MERN stack development and currently working as a software developer at MSQube Technology Solutions Pvt Limited. Specialized in JavaScript language and have professional experience with REACTJS & NODEJS.
        </p>
        <div className="p-4 my-5 bg-gray-400 flex-grow dark:bg-dark-200">
          <h5
          className="text-gray-700  font-bold mb-5 ml-0 pb-0  lg:pb-2 lg:ml-5 border-b-4  border-gray-700 text-xl tracking-wide">
            What I Offer
          </h5>
          <div className="grid md:grid-cols-2 gap-6">
          {
            services?.map((service,index)=>(
              <div className="lg:col-span-1 bg-gray-300 dark:bg-dark-500  rounded-md">
                <ServiceCard service={service} key={index}/>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}
