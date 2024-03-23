import * as React from "react"
import { SVGProps } from "react"

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    width="1em" 
    height="1em" 
    {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.452 20.45h-3.56v-5.57c0-1.327-.022-3.036-1.85-3.036-1.851 0-2.134 1.448-2.134 
      2.942v5.664H9.353V8.997h3.412v1.566h.049c.475-.9 1.636-1.85 3.367-1.85 3.605 0 4.27 
      2.371 4.27 5.456zM5.339 7.433a2.063 2.063 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zM7.12 
      20.45H3.557V8.997H7.12zM23 0H1a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"
    />
  </svg>
)
export default LinkedinIcon;
