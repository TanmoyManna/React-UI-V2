import { cn } from '@/lib/utils'
import React, { HTMLAttributes } from 'react'



const Container:React.FC<HTMLAttributes<HTMLDivElement>> = ({...props}) => {
  return (
    <div className={cn("container",props.className)}>
        {props.children}
    </div>
  )
}

export default Container