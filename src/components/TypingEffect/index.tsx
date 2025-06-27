import React, { useEffect, useState } from 'react'
import { Cursor } from './styles'

type TypingEffectProps = {
  text: string
  speed?: number
  loop?: boolean
}

const TypingEffect = ({
  text,
  speed = 100,
  loop = false
}: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index))
        setIndex((prev) => prev + 1)
      }, speed)
    } else if (loop) {
      timeout = setTimeout(() => {
        setDisplayedText('')
        setIndex(0)
      }, 3000)
    }

    return () => clearTimeout(timeout)
  }, [index, text, speed, loop])

  return (
    <span>
      {displayedText}
      <Cursor>|</Cursor>
    </span>
  )
}

export default TypingEffect
