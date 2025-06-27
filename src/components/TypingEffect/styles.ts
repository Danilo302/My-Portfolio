import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`

export const Cursor = styled.span`
  animation: ${blink} 1s infinite;
  font-weight: bold;
`
