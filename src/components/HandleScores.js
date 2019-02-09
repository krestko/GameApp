const cardValue = (card) => {
  let cardObj = card[0];
  for(let key in cardObj) {
    return cardObj[key][0];
  }
}

export default {
  cardValue: cardValue
}