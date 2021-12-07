import React from 'react';
import { connect } from 'react-redux';
import CardComponents from '../components/CardComponents';
import {addCard} from '../modules/blog'
const CardsContainers = ({cardList, addCard}) => {
  return (
    <div>
      <CardComponents cardList={cardList} addCard={addCard}/>
    </div>
  );
};

export default connect(
  state => ({
    cardList: state.blog.cardList
  }),
  {
    addCard,
  }
) (CardsContainers)