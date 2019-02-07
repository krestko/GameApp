const mapCards = (cards) => {
  let total = 0;
  cards.map(card => {
    for(let key in card) {
      if(card[key].length === 2) {
        total += 11;
      } else if(card[key][0] === 10) {
        console.log(card[key][0])
        total += 10;
      }
    }
  })
  if(total === 21) {
    return true;
  } else {
    return false;
  }
}

const checkForNatural = (dealerCards, playerCards) => {
  let dealer = dealerCards;
  let player = playerCards;
  if(dealer === true && player === false) {
    console.log('DEALER WINS!')
  } else if(dealer === false && player === true) {
    console.log('PLAYER WINS!')
  } else if(dealer === true && player === true) {
    console.log('TIE GAME!')
  } else {
    console.log('No Natural This Time.')
  }
}

export default {
  mapCards: mapCards,
  checkForNatural: checkForNatural
}