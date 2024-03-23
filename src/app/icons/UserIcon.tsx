import * as React from "react"
import { SVGProps } from "react"

const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40" 
    fill="none" 
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M20 0C22.6522 0 25.1957 1.05357 27.0711 2.92893C28.9464 
      4.8043 30 7.34784 30 10C30 12.6522 28.9464 15.1957 27.0711 17.0711C25.1957 
      18.9464 22.6522 20 20 20C17.3478 20 14.8043 18.9464 12.9289 17.0711C11.0536 
      15.1957 10 12.6522 10 10C10 7.34784 11.0536 4.8043 12.9289 2.92893C14.8043 
      1.05357 17.3478 0 20 0ZM20 25C31.05 25 40 29.475 40 35V40H0V35C0 29.475 
      8.95 25 20 25Z" fill="currentColor"
    />
  </svg>
)
export default UserIcon;
