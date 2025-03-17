import { MoveRight } from 'lucide-react'
import React from 'react'

interface ButtonmainProps extends React.PropsWithChildren {
  href: string;
}

const Buttonmain = (props: ButtonmainProps) => {
  return (
    <a href={props.href}>
      <button className="relative py-2 px-3 hidden md:flex rounded-lg font-medium text-sm text-[#2f3031] bg-[#e6e6e6] hover:bg-white shadow-[0_0_0_2px_rgba(0,0,0,.5),_0_0_14px_0_hsla(0,0%,100%,.19),_inset_0_-1px_0.4px_0_rgba(0,0,0,.2),_inset_0_1px_0.4px_0_#fff]  flex-row items-center justify-center gap-2">
        <span>{props.children}</span>
        <MoveRight className="text-black w-4 h-4" />
      </button>
    </a>
  )
}

export default Buttonmain
