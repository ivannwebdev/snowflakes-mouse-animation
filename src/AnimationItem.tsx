import { IAnimation } from "./App"
import { useEffect, useState } from 'react'
import './AnimatedItem.css'
import blue from './assets/blue.png'
import pink from './assets/pink.png'

function AnimationItem({ x, y }: IAnimation): JSX.Element | null {
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(false)
    }, 1500)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    mounted ?
      <div className="snowflake-wrapper" style={{ top: y - 15, left: x - 15 }}>
        <img className="snowflake" src={blue} alt=""/>
        <img className="snowflake" src={pink} alt="" style={{ filter: 'blur(20px)' }} />
      </div>
      :
      null
  )
}

export {AnimationItem}
