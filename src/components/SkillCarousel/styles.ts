import styled, { keyframes } from 'styled-components'

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`

export const Wrapper = styled.div`
  margin-bottom: 32px;
  margin-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  margin-bottom: 16px;
  text-transform: capitalize;
`

export const SliderWrapper = styled.div`
  overflow: hidden;
  position: relative;

  &:hover .slider-track {
    animation-play-state: paused;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 60px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, #1a1a1f 0%, transparent 100%);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, #1a1a1f 0%, transparent 100%);
  }
`

export const SliderTrack = styled.div`
  display: flex;
  gap: 16px;
  width: max-content;
  animation: ${scroll} 20s linear infinite;
  animation-play-state: running;
`

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  flex: 0 0 auto;
  min-width: 160px;
  padding: 16px;
  color: #fff;
  background: rgba(0, 123, 207, 0.4);
  border: solid 2px #007bff;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  cursor: grab;

  p {
    margin-left: 4px;
  }
`
