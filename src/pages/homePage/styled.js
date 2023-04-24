import styled from 'styled-components/native'
import { Theme } from '../../theme'

export const Container = styled.View`

`
export const ContainerMain = styled.View`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
`
export const Header = styled.View`
background-color: ${Theme.colors.blue[1]};
width: 100%;
height: 222px;
align-items: center;
flex-direction: row;
`
export const TextTime = styled.Text`
  position: relative;
  bottom: 180px;
  left: 140px;
  font-size: 16px;
  color: ${Theme.colors.white[1]};
  font-weight: bold;
`
export const TitleHeader = styled.Text`
position: absolute;
color: ${Theme.colors.white[1]};
width: 187px;
height: 30px;
top: 96px;
font-weight: 700;
font-size: 30px;
line-height: 30px;
text-align: center;
margin-left: 110px;
`
export const ImageP = styled.Image`
left: 55px;
bottom: 50px;
`
export const Card = styled.FlatList`
position: relative;
background: ${Theme.colors.white[1]};
width: 90%;
max-height: 35%;
margin-left: auto;
margin-right: auto;
bottom: 10%;
border-radius: 20px;
overflow: hidden; 
bottom: 33px; 
`
export const TitleComplet = styled.Text`
width: 86px;
height: 19px;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
left: 25px;
bottom: 3px;
`
export const CardError = styled.FlatList`
position: relative;
background: ${Theme.colors.white[1]};
width: 90%;
max-height: 30%;
height: 30%;
margin-left: auto;
margin-right: auto;
border-radius: 20px;
overflow: hidden;
top: 24px;
`
export const ViewContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly ;
  border-bottom-width: 0.5px;
  border-color: #25252532;
  padding: 10px;
  overflow: hidden;
`
export const ListText = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20%;
  height: 80px;
  width: 40%;
`
export const Txtfeitas = styled.Text`
  font-weight: bold;
  color: ${Theme.colors.black[2]};
  font-size: 16px;
`
export const Txttimefeitas = styled.Text`
  color: ${Theme.colors.black[2]};
  font-size: 14px;
  text-transform: uppercase;
`
export const ViewContainerFalse = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly ;
  border-bottom-width: 0.5px;
  border-color: #25252532;
  padding: 10px;
  overflow: hidden;
`
export const ListTextFalse = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20%;
  height: 80px;
  width: 40%;
`
export const TxtNaoFeitas = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-decoration: line-through;
  color: ${Theme.colors.blue[2]};
`
export const TxttimeNaofeitas = styled.Text`
  color: ${Theme.colors.blue[2]};
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: line-through;
`
export const IonHome = styled.View`
width: 48px;
height: 48px;
background: #DBECF6;
border-radius: 50px;
`
export const IconImage = styled.Image`
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin: auto;
`
