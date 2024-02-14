import styled from "styled-components"
import notFound from "./img/notFound.jpg"

export const Content = styled.div`
  display: flex;
  justify-content: center;
`

export const NotFoundBackground = styled.div`
  width: 600px;
  height: 600px;
  background-image: url(${notFound});
  background-size: cover;
`

export const NotFoundButton = styled.button`
  position: absolute;
  top: 420px;
  height: 50px;
  width: 140px;
  border-radius: 100px;
  background: transparent;

  &:hover {
    opacity: 0.5;
  }
`
