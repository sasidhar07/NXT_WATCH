import styled from 'styled-components'

export const LoginLabel = styled.label`
  color: ' #94a3b8';
`

export const showPass = styled.label`
  color: black;
`
export const NavEle = styled.nav`
  background-color: ${prop => (prop.color === 'light' ? 'white' : '#212121')};
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 13px;

  @media only screen and (max-width: 965px) {
    display: none;
  }
`

export const NavEleForSmall = styled.nav`
  background-color: ${prop => (prop.color === 'light' ? 'white' : '#212121')};
  display: none;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 13px;
  @media only screen and (max-width: 965px) {
    display: flex;
  }
`

export const LogoutButton = styled.button`
  border: 2px solid ${prop => (prop.color === 'light' ? '#3b82f6' : 'white')};
  background-color: transparent;
  margin: 0;
  margin-right: 20px;
  margin-left: 25px;
  padding-left: 10px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 10px;
  cursor: pointer;
  color: ${prop => (prop.color === 'light' ? '#3b82f6' : 'white')};
`

export const ExitButton = styled.button`
  font-size: 25px;
  background-color: transparent;
  border: 0;
  margin-top: 5px;
  cursor: pointer;
  margin-right: 10px;
  margin-left: 5px;
  color: ${prop => (prop.color === 'light' ? '#212121' : 'white')};
`
export const FliterCont = styled.div`
  padding-top: 25px;
  width: 18%;
  margin-bottom: auto;
  display: flex;
  height: 100vh;
  padding-right: 15px;
  padding-right: 15px;
  background-color: ${prop => (prop.color !== 'light' ? '#212121' : 'white')};
  flex-direction: column;
  color: ${prop => (prop.color === 'light' ? '#212121' : 'white')} !important;
  @media only screen and (max-width: 965px) {
    width: 100% !important;
    display: flex;
    flex-direction: column;
  }
`
export const CrossButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  color: ${prop => (prop.color === 'light' ? '#212121' : 'white')} !important;
  outline: none;
  font-size: 20px;
  margin-bottom: 32%;
  margin-left: 95%;
  @media only screen and (min-width: 965px) {
    display: none;
  }
`

export const FilterButton = styled.button`
  align-items: center;
  color: ${prop => (prop.color === 'light' ? '#212121' : 'white')} !important;
  display: flex;
  color: red;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  border: 0;
  min-width: 160px;
`

export const HomeMainContForSmall = styled.div`
  display: none;
  width: 100%;
  background-color: ${prop =>
    prop.color !== 'light' ? '#212121' : 'white'} !important;
  @media only screen and (max-width: 965px) {
    display: flex;
  }
`

export const HomeMainCont = styled.div`
  display: flex;
  width: 100%;
  background-color: ${prop =>
    prop.color !== 'light' ? '#212121' : 'white'} !important;
  @media only screen and (max-width: 965px) {
    display: none;
  }
`

export const RightCard = styled.div`
  background-color: ${prop =>
    prop.color !== 'light' ? 'black' : '#ebebeb'} !important;
  padding: 20px;
`

export const EachHomeItemText = styled.div`
  color: ${prop => (prop.color === 'light' ? '#212121' : '#cccccc')} !important;
`

export const HomeInputCard = styled.div`
  background-color: ${prop =>
    prop.color !== 'light' ? 'black' : ''} !important;
  display: flex;
  align-items: center;
  padding: 0;
  border: 1px solid #94a3b8;
  width: 30%;
  min-width: 240px;
  margin-bottom: 10px;
  justify-content: space-between;
  border: solid 2px ${prop => (prop.color !== 'light' ? '#424242' : '#616e7c')} !important;
`

export const SearchIconCardHome = styled.button`
  height: 100%;
  border-left: 2px solid
    ${prop => (prop.color !== 'light' ? '#424242' : '#616e7c')} !important;
  padding-right: 15px;
  border: none;
  cursor: pointer;
  background-color: ${prop =>
    prop.color !== 'light' ? '#231f20' : '#ebebeb'} !important;
  padding-left: 15px;
`
export const TrendingHead = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  padding-right: 50px;
  padding-left: 50px;
  color: ${prop => (prop.color === 'light' ? '#212121' : '#ebebeb')} !important;
  background-color: ${prop =>
    prop.color !== 'light' ? '#181818' : '#ebebeb'} !important;
`

export const TrendingContainer = styled.div`
  background-color: ${prop =>
    prop.color !== 'light' ? '#212121' : 'white'} !important;
  display: flex;
  margin-bottom: 30px;
  @media only screen and (max-width: 965px) {
    display: none;
  }
`
export const TrendingContainerSmall = styled.div`
  background-color: ${prop =>
    prop.color !== 'light' ? '#212121' : 'white'} !important;
  display: flex;
  margin-bottom: 30px;
  @media only screen and (min-width: 965px) {
    display: none;
  }
`

export const TrendingEachItemCard = styled.ul`
  padding: 12px;
  padding-right: 50px;
  margin-right: 0;
  color: ${prop => (prop.color !== 'light' ? '#f1f5f9' : 'Black')} !important;
  background-color: ${prop =>
    prop.color !== 'light' ? 'black' : '#f1f5f9'} !important;
  padding-left: 50px;
`

export const TrendingInnerItemCard = styled.div`
  color: ${prop => (prop.color === 'light' ? '#212121' : '#ebebeb')} !important;

  text-align: start;
  margin-left: 20px;
  height: 100%;
  padding: 0;
`

export const TrendingIconCard = styled.div`
  background-color: ${prop =>
    prop.color !== 'light' ? 'black' : '#cbd5e1'} !important;
  padding: 20px;
  border-radius: 100%;
  margin-right: 10px;
`

export const GamingIconCard = styled.div`
  background-color: ${prop =>
    prop.color !== 'light' ? 'black' : '#cbd5e1'} !important;
  padding: 20px;
  border-radius: 100%;
  margin-right: 10px;
`

export const GamingContainer = styled.div`
  background-color: ${prop =>
    prop.color !== 'light' ? '#212121' : 'white'} !important;
  display: flex;
  margin-bottom: 20px;
  @media only screen and (max-width: 965px) {
    display: none;
  }
`

export const GamingContainerSmall = styled.div`
  background-color: ${prop =>
    prop.color !== 'light' ? '#212121' : 'white'} !important;
  display: flex;
  margin-bottom: 20px;
  @media only screen and (min-width: 965px) {
    display: none;
  }
`

export const GamingHead = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  padding-right: 50px;
  padding-left: 50px;
  color: ${prop => (prop.color === 'light' ? '#212121' : '#ebebeb')} !important;
  background-color: ${prop =>
    prop.color !== 'light' ? '#181818' : '#ebebeb'} !important;
`
export const GamingEachItemCard = styled.ul`
  padding: 12px;
  padding-right: 50px;
  background-color: ${prop =>
    prop.color !== 'light' ? 'black' : '#f1f5f9'} !important;
  padding-left: 50px;
`
export const GameTitle = styled.li`
  color: ${prop => (prop.color === 'light' ? '#212121' : '#ebebeb')} !important;
  font-size: 16px;
`

export const VideoDetailsCardInnerCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 90vh;
  color: ${prop => (prop.color === 'light' ? '#212121' : '#ebebeb')} !important;
  background-color: ${prop =>
    prop.color !== 'light' ? 'black' : '#ebebeb'} !important;
`
export const NoSearchResultCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background-color: ${prop =>
    prop.color !== 'light' ? 'black' : '#ebebeb'} !important;
  flex-direction: column;
  color: ${prop => (prop.color === 'light' ? '#212121' : '#ebebeb')} !important;
`

export const SaveButton = styled.button`
  border: 0;
  color: ${prop => (prop.color ? '#3b82f6' : '#616e7c')} !important;

  background-color: transparent;
  cursor: pointer;
`
export const VideoDetailsLikeCard = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: ${prop => (prop.color ? '#3b82f6' : '#616e7c')} !important;
  @media only screen and (max-width: 965px) {
    margin-left: 0px;
  }
`
export const SavedContainer = styled.div`
  background-color: ${prop =>
    prop.color !== 'light' ? '#212121' : 'white'} !important;
  display: flex;
  justify-content: flex-start;
  @media only screen and (max-width: 965px) {
    display: none;
  }
`
export const SavedContainerSmall = styled.div`
  background-color: ${prop =>
    prop.color !== 'light' ? '#212121' : 'white'} !important;
  display: flex;
  justify-content: flex-start;
  @media only screen and (min-width: 965px) {
    display: none;
  }
`
export const SavedEachItemCard = styled.ul`
  padding: 12px;
  padding-right: 50px;
  margin-right: 0;
  color: ${prop => (prop.color !== 'light' ? '#f1f5f9' : 'Black')} !important;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 50px;
  @media only screen and (max-width: 965px) {
    justify-content: space-between;
  }
`
export const SavedHead = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  padding-right: 50px;
  padding-left: 50px;
  color: ${prop => (prop.color === 'light' ? '#212121' : '#ebebeb')} !important;
  background-color: ${prop =>
    prop.color !== 'light' ? '#181818' : '#ebebeb'} !important;
`
export const SavedInnerCard = styled.div`
  background-color: ${prop =>
    prop.color !== 'light' ? '#181818' : '#ebebeb'} !important;
  display: flex;
  color: ${prop => (prop.color === 'light' ? '#212121' : 'white')} !important;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 82%;
  @media only screen and (max-width: 965px) {
    width: 100%;
    height: 100vh;
  }
`
export const SavedMiniCont = styled.div`
  width: 100%;
  min-height: 93vh;
  background-color: ${prop =>
    prop.color !== 'light' ? '#181818' : '#f1f5f9'} !important;
`

export const LoaderCard = styled.div`
  height: 87vh;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`
export const HomeFailureCard = styled.div`
  color: ${prop => (prop.color === 'light' ? '#212121' : '#ebebeb')} !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 93vh;
`
export const NotFoundContainer = styled.div`
  background-color: ${prop => (prop.color !== 'light' ? '#212121' : 'white')};
  color: ${prop => (prop.color === 'light' ? '#212121' : 'white')} !important;
  display: flex;
`

export const NotFoundCard = styled.div`
  background-color: ${prop =>
    prop.color !== 'light' ? 'black' : '#ebebeb'} !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PremiumCard = styled.div`
  padding: 10px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: ${prop => (!prop.display ? 'None' : 'flex')} !important;
  justify-content: space-between;
  align-items: flex-start;
`

export const LogoutPopupContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
  width: 450px;
  border-radius: 8px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 300px;
  }
`
export const LogoutConfirmationMsg = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  margin: 10px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`

export const LogoutButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const LogoutCloseButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  padding: 13px;
  padding-right: 20px;
  padding-left: 20px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
    padding: 8px;
    padding-right: 12px;
    padding-left: 12px;
  }
`

export const LogoutConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  border: 1px solid #3b82f6;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
  padding: 13px;
  padding-right: 20px;
  padding-left: 20px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
    padding: 8px;
    padding-right: 12px;
    padding-left: 12px;
  }
`
export const HameBurgerButton = styled.button`
  border: 0;
  cursor: pointer;
  outline: none;
  font-size: 23px;
  margin-top: 5px;
  background-color: transparent;
  color: ${props => (props.color !== 'light' ? '#ffffff' : '#000000')};
`
