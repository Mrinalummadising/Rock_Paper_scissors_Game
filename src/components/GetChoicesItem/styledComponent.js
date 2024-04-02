import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #223a5f;
  padding: 20px;
`
export const RulesView = styled.div`
  align-self: flex-end;
  margin-top: auto;
  min-height: 100%;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`
export const ResultButton = styled.button`
  border: none;
  background-color: #ffffff;
  height: 30px;
  font-size: 15px;
  font-family: 'Bree Serif';
  color: #223a5f;
  font-weight: 600;
  border-radius: 5px;
`

export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 40vw;
  justify-content: space-between;
  padding: 10px;
  @media screen and (max-width: 576px) {
    height: 260px;
    width: 100%;
  }
`
export const PopUpImage = styled.img`
  width: 100%;
  height: 90%;
  margin-top: auto;
`
