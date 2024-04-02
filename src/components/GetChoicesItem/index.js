import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import ScoreCard from '../ScoreCard'
import Game from '../Game'

import {
  MainContainer,
  RulesView,
  PopUpView,
  PopUpImage,
  ResultButton,
} from './styledComponent'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissors extends Component {
  state = {
    isShow: true,
    newArray: [choicesList[0], choicesList[1]],
    text: 'YOU WON',
    score: 0,
  }

  restartGame = () => {
    this.setState({isShow: true})
  }

  getResults = (item1, item2) => {
    if (item1.id === 'ROCK') {
      switch (item2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (item1.id === 'PAPER') {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  checkResult = id => {
    const {score} = this.state
    const select1 = choicesList.filter(each => each.id === id)
    const select2 = choicesList[Math.floor(Math.random() * choicesList.length)]
    const result = this.getResults(select1[0], select2)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }

    this.setState({
      isShow: false,
      score: newScore,
      newArray: [select1[0], select2],
      text: result,
    })
  }

  render() {
    const {isShow, newArray, text, score} = this.state

    return (
      <MainContainer>
        <ScoreCard score={score} />
        <Game
          choicesList={choicesList}
          text={text}
          isShow={isShow}
          newArray={newArray}
          checkResult={this.checkResult}
          restartGame={this.restartGame}
        />
        <RulesView>
          <Popup
            modal
            trigger={<ResultButton type="button">RULES</ResultButton>}
          >
            {close => (
              <PopUpView>
                <button
                  type="button"
                  className="close-button"
                  onClick={() => close()}
                  aria-label="close"
                >
                  <RiCloseLine />
                </button>
                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopUpView>
            )}
          </Popup>
        </RulesView>
      </MainContainer>
    )
  }
}
export default RockPaperScissors
