import styled, { keyframes } from "styled-components"

export const SpinnerAnimation = keyframes` 
0% { 
  transform: rotate(0deg); 
} 
100% { 
  transform: rotate(360deg); 
} 
`

export const LoaderContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  margin-top: 10%;
  margin-bottom: 10%;
`

export const OuterCircle = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid #ccc;
  border-radius: 50%;
  animation: ${SpinnerAnimation} 1.4s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #ccc transparent transparent transparent;
`

export const InnerCircle = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  border-radius: 50%;
  animation: ${SpinnerAnimation} 1.4s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #333 transparent transparent transparent;
  animation-delay: -0.2s;
`
