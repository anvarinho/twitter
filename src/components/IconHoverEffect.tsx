import { ReactNode } from "react"

type IconHoverProps = {
    children: ReactNode
    red?: boolean
}

export default function IconHoverEffect({children, red = false}: IconHoverProps){
    const colorClasses = red ? "outline-red-400 hover:bg-red-200 group-hover-bg-red-200 group-focus-visible:bg-red-200 focus-visible:bg-red-400": "outline-gray-400 hover:bg-gray-200 group-hover-bg-gray-200 group-focus-visible:bg-gray-200 focus-visible:bg-gray-400"
    return <div className={`rounded-full p-2 transition-colors duration-200 ${colorClasses}`}>{children}</div>
}