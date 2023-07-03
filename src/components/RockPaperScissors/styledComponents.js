import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`

export const HeadingContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius:10px;
  width: 60%;
  display:flex;
  flex-direction:row;
  justify-content:space-around
  border-radius: 10px;
  padding:10px;
  align-self:center;
`

export const MainHeading = styled.h1`
  font-family: 'Bree Serif';
  padding-left: 15px;
  font-size: 38px;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  padding: 10px;
  padding-top: 0px;
  max-height: 80%;
  margin-bottom: auto;
  margin-top: auto;
  border-radius: 5px;
  margin-left: auto;
`

export const BreakElement = styled.br``

export const ScoreHeading = styled.p`
  text-align: center;
  font-size: 20px;
  font-family: 'Bree Serif';
  color: #223a5f;
`
export const ScoreElement = styled.p`
  text-align: center;
  font-size: 30px;
  font-family: 'Roboto';
  color: #223a5f;
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  border-radius: 8px;
  color: #223a5f;
  padding: 20px;
  align-self: flex-end;
`

export const RulesImage = styled.img`
  width: 50%;
  height: 50%;
  align-self: center;
  margin-top: auto;
  margin-bottom: auto;
`

export const ModalContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  width: 40px;
  text-align: center;
  height: 30px;
  border: 0;
  margin-top: 10px;
  margin-right: 10px;
`

export const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const UserChoosenImage = styled.img`
  width: 150px;
  margin-top: 50px;
`

export const OpponentChoosenImage = styled.img`
  width: 150px;
  margin-top: 50px;
  margin-left: 50px;
`

export const Result = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-family: 'Roboto';
  align-self: center;
  font-size: 38px;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const PlayAgainButton = styled.button`
  align-self: center;
  background-color: #ffffff;
  color: #223a5f;
  border-radius: 10px;
  width: 100px;
  height: 40px;
`
