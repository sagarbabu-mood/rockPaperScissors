import {ItemButton, ItemImage} from './styledComponents'

const ItemContainer = props => {
  const {choiceDetails, checkResults} = props
  const {id, imageUrl} = choiceDetails

  let testIdValue
  if (id === 'ROCK') {
    testIdValue = 'rockButton'
  } else if (id === 'SCISSORS') {
    testIdValue = 'scissorsButton'
  } else {
    testIdValue = 'paperButton'
  }

  const onClickImage = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    checkResults(choiceDetails, randomNumber)
  }

  return (
    <ItemButton type="button" data-testid={testIdValue} onClick={onClickImage}>
      <ItemImage src={imageUrl} alt={id} />
    </ItemButton>
  )
}

export default ItemContainer
