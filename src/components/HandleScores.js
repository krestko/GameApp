const mapCards = (cards) => {
  let total = 0;
  cards.map(card => {
    for(let key in card) {
      if(card[key].length === 2) {
        total += 11;
      } else {
        total += card[key][0];
      }
    }
  })
  return total;
}

const checkForBust = (total) => {
  console.log('BUST CHECK', total)
  if(total > 21) {
    return 'Bust';
  }
}

const cardValue = (card) => {
  let cardObj = card[0];
  for(let key in cardObj) {
    return cardObj[key][0];
  }
}

const checkForNatural = (dealerCards, playerCards) => {
  let dealer = dealerCards;
  let player = playerCards;
  if(dealer < 21 && player < 21) {
    return 'POOP';
  } else if(dealer !== 21 && player === 21) {
    return 'Player Wins';
  } else if(player !== 21 && dealer === 21) {
    return 'Dealer Wins';
  } else {
    return 'Tie';
  }
}

export default {
  mapCards: mapCards,
  checkForNatural: checkForNatural,
  checkForBust: checkForBust,
  cardValue: cardValue
}