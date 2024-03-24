// 📁 components/navigations/Footer.tsx

// import Link from "next/link"
import TwitterIcon from "@/app/icons/TwitterIcon";
import InstagramIcon from "@/app/icons/InstagramIcon";
import LinkedinIcon from "@/app/icons/LinkedinIcon";
import GithubIcon from "@/app/icons/GithubIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bottom-0 px-1 px-6 xsl:px-10 pt-32 pb-6 w-full bg-black ">
      <div className="w-full flex flex-wrap xsl:justify-between gap-4">
        <div className="flex flex-col items-start gap-3 pr-10">
          <p className="text-slate-400">
            <span className="text-slate-300 font-medium">Disclaimer:</span>
            The information provided on this website is for general 
            informational purposes only
          </p>
          <div className="flex gap-x-3">
            <span className="p-1 bg-white text-black rounded-full">
              <LinkedinIcon className="text-sm" />
            </span>
            <span className="p-1 bg-white text-black rounded-full">
              <InstagramIcon className="text-sm" />
            </span>
            <span className="p-1 bg-white text-black rounded-full">
              <TwitterIcon className="text-sm" />
            </span>
            <span className="p-1 bg-white text-black rounded-full">
              <GithubIcon className="text-sm" />
            </span>
          </div>
        </div>
        <div className="flex gap-x-3 items-end">
          <div className="flex flex-col">
            <span>Join our Newsletter</span>
            <input type="password" 
              placeholder="Enter your email" 
              className="w-full rounded-lg py-3 px-4"/>
          </div>
          <button className="p-3 bg-blue-500">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer;