import { createAction, handleActions } from "redux-actions"

const ADDCARD = 'blog/ADD_CARD'

export const addCard = createAction(ADDCARD, (title, subTitle, img, text) => ({
  title,
  subTitle,
  img,
  text
}))

const initialState ={
  cardList: []
}

const setPost = handleActions({
  [ADDCARD]: (state, action) => ({
    ...state,
    cardList: state.cardList.concat(action.payload)
  })
},
initialState)

export default setPost