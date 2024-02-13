import styled from "styled-components"

export const PagesContainer = styled.div`
  display: flex;
`

export const BtnPrev = styled.button`
  width: 300px;
  height: auto;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-color: black;
  padding: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: white;
  margin: 10px;
  text-align: center;
  transition: background-color 0.4s ease;
  cursor: pointer;

  &:hover {
    background-color: burlywood;
  }
`

export const BtnNext = styled.button`
  width: 300px;
  height: auto;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-color: black;
  padding: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: white;
  margin: 10px;
  text-align: center;
  transition: background-color 0.4s ease;
  cursor: pointer;

  &:hover {
    background-color: burlywood;
  }
`

export const CurrentNumberPageDiv = styled.div`
  background-color: burlywood;
  width: 50px;
  font-size: 21px;
  border-radius: 15%;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ForErrors = styled.div`
  color: red;
  font-weight: 400;
  font-size: 28px;
  line-height: 25px;
  text-align: center;
`
