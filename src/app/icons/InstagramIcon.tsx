import * as React from "react"
import { SVGProps } from "react"

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 72 72"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={8}
      d="M46.785 12.614h-21.57c-6.96 0-12.601 5.642-12.601 12.601v21.57c0 6.96 5.642 12.601 12.602 12.601h21.568c6.96 0 12.602-5.642 12.602-12.602V25.215c0-6.96-5.642-12.601-12.601-12.601z"
    />
    <circle
      cx={36}
      cy={36}
      r={11.29}
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={8}
    />
    <circle cx={49.709} cy={22.291} r={2.419} />
  </svg>
)
export default InstagramIcon
