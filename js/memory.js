class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked=0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // for i from n−1 downto 1 do
    //  j ← random integer such that 0 ≤ j ≤ i
    //  exchange a[j] and a[i]
    if(!this.cards){
     return //* Same as returning undefined /
     //return undefined    
    }
    
    for(let i=0; i<(this.cards.length);i++){
      const randomCardIndex = Math.floor(Math.random()*this.cards.length);
      const randomCard = this.cards[randomCardIndex];
      
      this.cards[randomCardIndex]=this.cards[i];
      this.cards[i]=randomCard;
      
    }
   // this.cards=shuffleArray; //* Assign the shuffled cards into the cards array
  }

  checkIfPair(card1, card2) {
    if(card1 === card2){
      this.pairsGuessed ++;
      return true;
    }
    else {
      this.pairsClicked ++;
      return false;}
  }

  checkIfFinished() {
   if(this.pairsGuessed === (this.cards.length/2)){
     return true;
   }
   else 
     return false;
   
   }
  }


// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
