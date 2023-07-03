import {Component} from 'react'

import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  MainContainer,
  HeadingContainer,
  MainHeading,
  ScoreContainer,
  ScoreHeading,
  ScoreElement,
  BreakElement,
  RulesButton,
  RulesImage,
  ModalContainer,
  CloseButton,
  ChoicesContainer,
  ResultContainer,
  UserChoosenImage,
  OpponentChoosenImage,
  PlayAgainButton,
  Result,
} from './styledComponents'

import ItemContainer from '../ItemContainer'

class RockPaperScissors extends Component {
  state = {
    score: 0,
    isGameInProgress: true,
    result: '',
    opponentImage: '',
    userImage: '',
  }

  checkResults = (choiceDetails, randomNumber) => {
    console.log(choiceDetails, randomNumber)
    const {id, imageUrl} = choiceDetails
    const {choicesList} = this.props
    const randomChoice = choicesList[randomNumber]
    const randomId = randomChoice.id
    const randomImage = randomChoice.imageUrl
    console.log(randomId)
    if (id === randomId) {
      this.setState(prevState => ({
        score: prevState.score,
        isGameInProgress: false,
        userImage: imageUrl,
        opponentImage: imageUrl,
        result: 'IT IS DRAW',
      }))
    } else if (id === 'PAPER') {
      if (randomId === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          isGameInProgress: false,
          userImage: imageUrl,
          opponentImage: randomImage,
          result: 'YOU WON',
        }))
      } else if (randomId === 'SCISSORS') {
        this.setState(prevState => ({
          score: prevState.score - 1,
          userImage: imageUrl,
          opponentImage: randomImage,
          isGameInProgress: false,
          result: 'YOU LOSE',
        }))
      }
    } else if (id === 'SCISSORS') {
      if (randomId === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score - 1,
          userImage: imageUrl,
          opponentImage: randomImage,
          isGameInProgress: false,
          result: 'YOU LOSE',
        }))
      } else if (randomId === 'PAPER') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          userImage: imageUrl,
          opponentImage: randomImage,
          isGameInProgress: false,
          result: 'YOU WON',
        }))
      }
    } else if (id === 'ROCK') {
      if (randomId === 'PAPER') {
        this.setState(prevState => ({
          score: prevState.score - 1,
          isGameInProgress: false,
          userImage: imageUrl,
          opponentImage: randomImage,
          result: 'YOU LOSE',
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score + 1,
          isGameInProgress: false,
          userImage: imageUrl,
          opponentImage: randomImage,
          result: 'YOU WON',
        }))
      }
    }
  }

  onResetGame = () => {
    this.setState({isGameInProgress: true})
  }

  render() {
    const {
      score,
      isGameInProgress,
      userImage,
      opponentImage,
      result,
    } = this.state
    console.log(score, isGameInProgress)
    const {choicesList} = this.props
    return (
      <MainContainer>
        <HeadingContainer>
          <MainHeading>
            ROCK
            <BreakElement />
            PAPER
            <BreakElement />
            SCISSORS
          </MainHeading>
          <ScoreContainer>
            <ScoreHeading>Score</ScoreHeading>
            <ScoreElement>{score}</ScoreElement>
          </ScoreContainer>
        </HeadingContainer>
        <ChoicesContainer>
          {isGameInProgress ? (
            choicesList.map(choiceDetails => (
              <ItemContainer
                choiceDetails={choiceDetails}
                key={choiceDetails.id}
                checkResults={this.checkResults}
              />
            ))
          ) : (
            <ResultContainer>
              <div>
                <UserChoosenImage src={userImage} alt="your choice" />
                <OpponentChoosenImage
                  src={opponentImage}
                  alt="opponent choice"
                />
              </div>
              <Result>{result}</Result>
              <PlayAgainButton onClick={this.onResetGame}>
                PLAY AGAIN
              </PlayAgainButton>
            </ResultContainer>
          )}
        </ChoicesContainer>
        <Popup
          modal
          trigger={
            <RulesButton onClick={this.onDisplayPopUp}>RULES</RulesButton>
          }
          className="popup-content"
        >
          {close => (
            <ModalContainer>
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseLine />
              </CloseButton>
              <RulesImage
                alt="rules"
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              />
            </ModalContainer>
          )}
        </Popup>
      </MainContainer>
    )
  }
}

export default RockPaperScissors
