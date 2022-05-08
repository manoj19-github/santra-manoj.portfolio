import '../styles/globals.css'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar/Navbar"
import {ThemeProvider} from "next-themes"
function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6  pl-2 pr-2 px-2 md:px-16  lg:px-20 lg:mt-8 mt-5 mx-auto pb-4 h-full">
        <div className="lg:col-span-3 shadow-custom-light dark:shadow-custom-dark  bg-white dark:bg-dark-600 rounded-2xl  col-span-12 p-4 h-full ">
          <Sidebar/>
        </div>
        <div
        className="lg:col-span-9  bg-white dark:bg-dark-600 shadow-custom-light dark:shadow-custom-dark  rounded-2xl col-span-12  p-4 flex flex-col ">
          <Navbar/>
           <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>


  )
}

export default MyApp
