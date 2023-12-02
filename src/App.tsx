import { useEffect, useState } from 'react'
import './App.css'
import { AnimationItem } from './AnimationItem'

export interface IAnimation {
  x: number,
  y: number
}

function App() {
  const [animations, setAnimations] = useState<Array<IAnimation>>([])

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      const distance = Math.sqrt(Math.pow(e.clientX - animations[animations.length - 1]?.x, 2) + Math.pow(e.clientY - animations[animations.length - 1]?.y, 2))

      if (distance < 50) return

      setAnimations(a => [...a, {
          x: e.clientX,
          y: e.clientY
        }
      ]
      )
    })
  }, [])
  return (
    <div className='app'>
      {
        animations.map(
          ({x, y}) =>
            <AnimationItem x={x} y={y} />
        )
      }
    </div>
  )
}

export default App
