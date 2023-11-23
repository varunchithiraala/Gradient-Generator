import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  Heading,
  DirectionDescription,
  GradientDirectionsList,
  ColorPickerDescription,
  ColorPickerContainer,
  CustomInputandColorContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323 ,#014f7b`,
  }

  onGenerateGradient = () => {
    const {activeGradientDirection, fromColorInput, toColorInput} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  onChangeFromColorInput = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColorInput = event => {
    this.setState({toColorInput: event.target.value})
  }

  onClickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  render() {
    const {
      activeGradientDirection,
      fromColorInput,
      toColorInput,
      gradientValue,
    } = this.state

    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionDescription>Choose Direction</DirectionDescription>
          <GradientDirectionsList>
            {gradientDirectionsList.map(eachGradientDirection => (
              <GradientDirectionItem
                key={eachGradientDirection.directionId}
                gradientDirectionDetails={eachGradientDirection}
                clickGradientDirectionItem={this.onClickGradientDirectionItem}
                isActive={
                  activeGradientDirection === eachGradientDirection.value
                }
              />
            ))}
          </GradientDirectionsList>
          <ColorPickerDescription>Pick the Colors</ColorPickerDescription>
          <ColorPickerContainer>
            <CustomInputandColorContainer>
              <ColorValue>{fromColorInput}</ColorValue>
              <CustomInput
                type="color"
                onChange={this.onChangeFromColorInput}
                value={fromColorInput}
              />
            </CustomInputandColorContainer>
            <CustomInputandColorContainer>
              <ColorValue>{toColorInput}</ColorValue>
              <CustomInput
                type="color"
                onChange={this.onChangeToColorInput}
                value={toColorInput}
              />
            </CustomInputandColorContainer>
          </ColorPickerContainer>
          <GenerateButton type="button" onClick={this.onGenerateGradient}>
            Generate
          </GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
