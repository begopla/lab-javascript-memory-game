const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

let numberOfClicks=0;
let cardArray=[];
//TODO pick the pairs click to updat the numbers
const pairsClicked = document.getElementById('pairs-clicked')

const pairsGuessed = document.getElementById('pairs-guessed')

let counterPairsGuessed=0;
let counterPairsClicked =0;
let cardNames =[];
// console.log(pairsClicked);
function checkResults (cardArray) {

  cardArray.forEach((card) =>{
    const name = card.getAttribute('data-card-name')//gets the name of the attribute 
    cardNames.push(name)
  })
  const resultIsPaired = memoryGame.checkIfPair(cardNames[0], cardNames[1])  
  return resultIsPaired;
}

function removeTurned(array) {
  setTimeout(()=>{
    array.classList.remove('turned')        
  },5000)
}
function gameOver (){
const gameOver= memoryGame.checkIfFinished()
  if(gameOver){
    prompt('You are awesome, you fisihed the game!')
    
  }
}
memoryGame.shuffleCards(); //* shuffle the cards at the beguining
window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });
 

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  let readyToPlay = prompt("Remember the cards in 5 seconds and play!");
   // Bind the click event of each element to a function

  document.querySelectorAll('.card').forEach((card) => {

    card.classList.add('turned')
    //
   //if(readyToPlay === "Y" || readyToPlay === "y" || readyToPlay === "Yes" || readyToPlay === "yes"){

    removeTurned(card) //after the timer it turns back all cards
      //prompt('GAME ON! REMEMBER ALL CARDS?')
      
      card.addEventListener('click', () => {
        // TODO: write some code here
        numberOfClicks +=1;
        //console.log(`Card clicked: ${card}`);
        cardArray.push(card)
        card.classList.add('turned')
        
        if(numberOfClicks===2){
          cardNames =[]
          const resultIsPaired = checkResults(cardArray);
        
         setTimeout(() => {
           
           if(resultIsPaired){
             counterPairsGuessed++;
             pairsGuessed.innerHTML = counterPairsGuessed;
             prompt('Congratulations, you got it right!')
             gameOver();
            }     

            else {prompt(`You have picked the wrong cards, please try again`);
            counterPairsClicked ++;
            pairsClicked.innerHTML = counterPairsClicked;
            cardArray.forEach(card => {
              card.classList.remove('turned') 
            })
                 }
         }, 500);
        }
        
        
        ///! While loop to continue with game until finished.
        while(((numberOfClicks/2)>1 && 1>counterPairsGuessed<(cards.length/2))){
          numberOfClicks = 1;
          cardArray=[]
          card.classList.add('turned')
          cardArray.push(card)
          
          
          if(numberOfClicks===2){
            const resultIsPaired = checkResults(cardArray);
            setTimeout(() => {
              
              if(resultIsPaired){
                counterPairsGuessed++;
                pairsGuessed.innerHTML = counterPairsGuessed;
                prompt('Congratulations, you got it right!')
                gameOver();
              }       
              else {prompt(`You have picked the wrong cards, please try again`);
            counterPairsClicked ++;
            pairsClicked.innerHTML = counterPairsClicked;
            
            cardArray.forEach(card => {
              card.classList.remove('turned')
              cardArray = [];
              
            })
          }
         }, 1000);
        }
        }
      });
    
    //}

  });
  
});
