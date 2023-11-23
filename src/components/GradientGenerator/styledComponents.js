// Style your elements here
import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ResponsiveContainer = styled.div`
  width: 90%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`

export const Heading = styled.h1`
  text-align: center;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const DirectionDescription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 22px;
  line-height: 1.5;
  font-weight: 500;
`
export const GradientDirectionsList = styled.ul`
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`

export const ColorPickerDescription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 22px;
  line-height: 1.5;
  font-weight: 500;
`

export const ColorPickerContainer = styled.div`
  min-width: 320px;
  display: flex;
  justify-content: space-around;
`
export const CustomInputandColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorValue = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
`

export const CustomInput = styled.input`
  height: 50px;
  width: 100px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  color: #1e293b;
  background-color: #00c9b7;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  min-width: 25px;
  border: none;
  border-radius: 6px;
  padding-top: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 12px;
  margin-top: 25px;
  margin-left: 15px;
  margin-right: 0;
  margin-bottom: 10px;
  outline: none;
  cursor: pointer;
`
