// 📁 components/navigations/Footer.tsx

import Link from "next/link"
import ColorPickerIcon from "../../icons/ColorPickerIcon"
import { ThemeSwitcher } from "..";
import TwitterIcon from "@/app/icons/TwitterIcon";
import InstagramIcon from "@/app/icons/InstagramIcon";
import LinkedinIcon from "@/app/icons/LinkedinIcon";
import GithubIcon from "@/app/icons/GithubIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  let showColor: boolean = false;

  return (
    <footer className="sticky bottom-0 px-1 sm:px-5 py-8 dark:bg-gray-900 w-full ">

      <div className="flex flex-wrap justify-center mx-auto">
        <div className="grid gap-y-5">
          <div className="flex justify-center">
            <ul className="flex p-2 xxe:p-4 flex-row md:space-x-8 md:mt-0 md:text-sm font-medium">
              <li>
                <Link href={"https://www.github.com/kingisdave"} 
                  className="block p-1 text-gray-700 rounded hover:text-blue-700 dark:hover:bg-white dark:hover:text-black dark:text-white" 
                  aria-current="page" target="_blank">
                  <GithubIcon className="text-3xl xxe:text-5xl" />
                </Link>
              </li>
              <li>
                <Link href={"https://www.twitter.com/kingisdave"} 
                  className="block p-1 text-gray-700 rounded-full hover:text-blue-700 dark:hover:bg-white dark:hover:text-cyan-700 dark:text-white" 
                  aria-current="page" >
                  <TwitterIcon className="text-3xl xxe:text-5xl "/>
                </Link>
              </li>
              <li>
                <Link href={"https://www.instagram.com/kingisdave"} 
                  className="block p-1 text-gray-700 rounded-xl hover:text-blue-700 dark:hover:bg-slate-300 dark:hover:text-red-800 dark:text-white ">
                  <InstagramIcon className="text-3xl xxe:text-5xl" />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/david-ayangunna" 
                  className="block text-gray-700 rounded-lg hover:text-blue-700 dark:hover:bg-white dark:hover:text-blue-700 dark:text-white">
                  <LinkedinIcon className="text-3xl xxe:text-5xl"/>
                </Link>
              </li>
            </ul>
          </div>

          <Link href="/" className="flex items-center justify-center">
            <span className="self-center text-gray-600 text-xl xxe:text-sm font-medium whitespace-nowrap dark:text-white">
              &copy; David Ayangunna {currentYear}
            </span>
          </Link>
        </div>

      </div>
      <div className="absolute top-10 right-5 xxe:right-10 text-slate-300 dark:text-slate-700">
        <div 
          className="px-2 mt-3 font-semibold transition-colors rounded-2xl duration-600"
        >
          {/* <ArrowRightIcon width={"1.5em"} height={"1.5em"}/> */}
          {/* <ColorPickerIcon color={"blue"} width={"2em"} height={"2em"} /> */}
          {/* Take a Quiz */}
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  )
}

export default Footer;