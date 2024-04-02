import {
  ScoreContainer,
  ScoreNameContainer,
  ScoreName,
  ScoreBoard,
  ScoreHeading,
  ScoreResult,
} from './styledComponents'

const ScoreCard = props => {
  const {score} = props
  return (
    <ScoreContainer>
      <ScoreNameContainer>
        <ScoreName>
          ROCK
          <br /> PAPER <br /> SCISSORS
        </ScoreName>
      </ScoreNameContainer>
      <ScoreBoard>
        <ScoreHeading>Score</ScoreHeading>
        <ScoreResult>{score}</ScoreResult>
      </ScoreBoard>
    </ScoreContainer>
  )
}

export default ScoreCard
