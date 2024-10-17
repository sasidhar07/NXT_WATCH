import React from 'react'

const NxtContext = React.createContext({
  Theme: 'light',
  SavedList: [],
  LikedList: [],
  DisLikedList: [],
  AddElementToSavedList: () => {},
  AddElementToLikedList: () => {},
  AddElementToDisLikedList: () => {},
  changeTheme: () => {},
  filter: false,
})

export default NxtContext
