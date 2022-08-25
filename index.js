// import
// import difficulties from './data/difficulties';

import ancientsData from './data/ancients.js'
import allGreenCards from './data/mythicCards/green/index.js'
import allBrownCards from './data/mythicCards/brown/index.js'
import allBlueCards from './data/mythicCards/blue/index.js'


//const 

const chooseAncient = document.querySelector('.chooseAncient')
const popupWrapper = document.querySelector('.popupWrapper')
const leftSection = document.querySelector('.leftSection')
const popup = document.querySelector('.popup')
const shuffleButton = document.querySelector('.shuffleButton')
const difficultyForm = document.forms.difficultyForm
const counter = document.querySelector('.counter')
const firstGreen = document.getElementById('firstGreen')
const firstBrown = document.getElementById('firstBrown')
const firstBlue = document.getElementById('firstBlue')
const secondGreen = document.getElementById('secondGreen')
const secondBrown = document.getElementById('secondBrown')
const secondBlue = document.getElementById('secondBlue')
const thirdGreen = document.getElementById('thirdGreen')
const thirdBrown = document.getElementById('thirdBrown')
const thirdBlue = document.getElementById('thirdBlue')
const cardsDeckUl = document.querySelector('.cardsDeckUl')
const doneUl = document.querySelector('.doneUl')
const st1Title = document.querySelector('.st1Title')
const st2Title = document.querySelector('.st2Title')
const st3Title = document.querySelector('.st3Title')   

let deck1st = []
let deck2st = []
let deck3st = []

let g1 = 0
let br1 = 0
let bl1 = 0
let g2 = 0
let br2 = 0
let bl2 = 0
let g3 = 0
let br3 = 0
let bl3 = 0

let commonDeck = []


// functions

const showPopup = () => popupWrapper.classList.add('active')
const hidePopup = () => popupWrapper.classList.remove('active')
const changeChooseTitle = () => {
  if (leftSection.childNodes[1]) {
    ancientsData.forEach((value) => {
      if (value.name === leftSection.childNodes[1].id) {
        chooseAncient.innerHTML = value.rusName
      }
    })
  }
}
const showShuffleButton = () => shuffleButton.classList.add('active')
const hideShuffleButton = () => shuffleButton.classList.remove('active')
const showCounter = () => counter.classList.add('active')
const hideCounter = () => {
  counter.classList.remove('active')
  st1Title.classList.remove('red')
  st2Title.classList.remove('red')
  st3Title.classList.remove('red')
}
const shuffle = (arr) => {
const arr2 = arr.map((value) => {
    return [Math.random(), value]
  }).sort().map((newValue) => {
      return newValue[1]
    })
  return arr2
}
const refreshCounter = () => {
  firstBlue.innerHTML = bl1
  secondBlue.innerHTML = bl2
  thirdBlue.innerHTML = bl3
  firstGreen.innerHTML = g1
  secondGreen.innerHTML = g2
  thirdGreen.innerHTML = g3
  firstBrown.innerHTML = br1
  secondBrown.innerHTML = br2
  thirdBrown.innerHTML = br3
  if (bl1 + br1 + g1 === 0) {
    st1Title.classList.add('red')
  }
    if (bl2 + br2 + g2 === 0) {
    st2Title.classList.add('red')
  }
      if (bl3 + br3 + g3 === 0) {
    st3Title.classList.add('red')
  }
}


//
const prepareDeck = (ancient, level) => {

deck1st = []
deck2st = []
deck3st = []
commonDeck = []

g1 = 0
br1 = 0
bl1 = 0
g2 = 0
br2 = 0
bl2 = 0
g3 = 0
br3 = 0
bl3 = 0

const green1st = ancientsData.find(pers => pers.name === ancient).firstStage.greenCards
const blue1st = ancientsData.find(pers => pers.name === ancient).firstStage.blueCards
const brown1st = ancientsData.find(pers => pers.name === ancient).firstStage.brownCards

const green2st = ancientsData.find(pers => pers.name === ancient).secondStage.greenCards
const blue2st = ancientsData.find(pers => pers.name === ancient).secondStage.blueCards
const brown2st = ancientsData.find(pers => pers.name === ancient).secondStage.brownCards

const green3st = ancientsData.find(pers => pers.name === ancient).thirdStage.greenCards
const blue3st = ancientsData.find(pers => pers.name === ancient).thirdStage.blueCards
const brown3st = ancientsData.find(pers => pers.name === ancient).thirdStage.brownCards

let startGreenDeck1 = []
let startGreenDeck2 = []
let startBrownDeck1 = []
let startBrownDeck2 = []
let startBlueDeck1 = []
let startBlueDeck2 = []


if (level === 'veryHard') {
startGreenDeck1 = shuffle(allGreenCards.filter(element => {
  return element.difficulty === 'hard'
}))
startGreenDeck2 = shuffle(allGreenCards.filter(element => {
  return element.difficulty === 'normal'
  }))
startBrownDeck1 = shuffle(allBrownCards.filter(element => {
  return element.difficulty === 'hard'
}))
startBrownDeck2 = shuffle(allBrownCards.filter(element => {
  return element.difficulty === 'normal'
  }))
startBlueDeck1 = shuffle(allBlueCards.filter(element => {
  return element.difficulty === 'hard'
}))
startBlueDeck2 = shuffle(allBlueCards.filter(element => {
  return element.difficulty === 'normal'
  }))
}


if (level === 'hard') {
startGreenDeck1 = shuffle(allGreenCards.filter(element => {
  return element.difficulty === 'hard' || element.difficulty === 'normal'
}))
startBrownDeck1 = shuffle(allBrownCards.filter(element => {
  return element.difficulty === 'hard' || element.difficulty === 'normal'
}))
startBlueDeck1 = shuffle(allBlueCards.filter(element => {
  return element.difficulty === 'hard' || element.difficulty === 'normal'
}))
}


if (level === 'normal') {
startGreenDeck1 = shuffle(allGreenCards)
startBrownDeck1 = shuffle(allBrownCards)
startBlueDeck1 = shuffle(allBlueCards)
}


if (level === 'easy') {
startGreenDeck1 = shuffle(allGreenCards.filter(element => {
  return element.difficulty === 'easy' || element.difficulty === 'normal'
}))
startBrownDeck1 = shuffle(allBrownCards.filter(element => {
  return element.difficulty === 'easy' || element.difficulty === 'normal'
}))
startBlueDeck1 = shuffle(allBlueCards.filter(element => {
  return element.difficulty === 'easy' || element.difficulty === 'normal'
}))  
}


if (level === 'veryEasy') {
startGreenDeck1 = shuffle(allGreenCards.filter(element => {
  return element.difficulty === 'easy'
}))
startGreenDeck2 = shuffle(allGreenCards.filter(element => {
  return element.difficulty === 'normal'
  }))
startBrownDeck1 = shuffle(allBrownCards.filter(element => {
  return element.difficulty === 'easy'
}))
startBrownDeck2 = shuffle(allBrownCards.filter(element => {
  return element.difficulty === 'normal'
  }))
startBlueDeck1 = shuffle(allBlueCards.filter(element => {
  return element.difficulty === 'easy'
}))
startBlueDeck2 = shuffle(allBlueCards.filter(element => {
  return element.difficulty === 'normal'
  }))  
}

let deckToPlayGreen = []
let deckToPlayBrown = []
let deckToPlayBlue = []

let i = 0

while (i < green1st + green2st + green3st) {
  if (startGreenDeck1.length > 0){
    deckToPlayGreen.push(startGreenDeck1.pop())
  } else {
    deckToPlayGreen.push(startGreenDeck2.pop())
  }
  i++
}

i = 0
while (i < brown1st + brown2st + brown3st) {
  if (startBrownDeck1.length > 0){
    deckToPlayBrown.push(startBrownDeck1.pop())
  } else {
    deckToPlayBrown.push(startBrownDeck2.pop())
  }
  i++
}

i = 0
while (i < blue1st + blue2st + blue3st) {
  if (startBrownDeck1.length > 0){
    deckToPlayBlue.push(startBlueDeck1.pop())
  } else {
    deckToPlayBlue.push(startBlueDeck2.pop())
  }
  i++
}

deckToPlayGreen = shuffle(deckToPlayGreen)
deckToPlayBrown = shuffle(deckToPlayBrown)
deckToPlayBlue = shuffle(deckToPlayBlue)

i = 0
while (i < green1st) {
  deck1st.push(deckToPlayGreen.pop())
  g1++
  i++
}

i = 0
while (i < green2st) {
  deck2st.push(deckToPlayGreen.pop())
  g2++
  i++
}

i = 0
while (i < green3st) {
  deck3st.push(deckToPlayGreen.pop())
  g3++
  i++
}

i = 0
while (i < brown1st) {
  deck1st.push(deckToPlayBrown.pop())
  br1++
  i++
}

i = 0
while (i < brown2st) {
  deck2st.push(deckToPlayBrown.pop())
  br2++
  i++
}

i = 0
while (i < brown3st) {
  deck3st.push(deckToPlayBrown.pop())
  br3++
  i++
}

i = 0
while (i < blue1st) {
  deck1st.push(deckToPlayBlue.pop())
  bl1++
  i++
}

i = 0
while (i < blue2st) {
  deck2st.push(deckToPlayBlue.pop())
  bl2++
  i++
}

i = 0
while (i < blue3st) {
  deck3st.push(deckToPlayBlue.pop())
  bl3++
  i++
}

refreshCounter()

commonDeck.push(...shuffle(deck3st))
commonDeck.push(...shuffle(deck2st))
commonDeck.push(...shuffle(deck1st))
}

let tr = 0
let delay = 0

const createDeck = () => {
  if (cardsDeckUl.childElementCount === 0 && doneUl.childElementCount === 0 ) {
commonDeck.forEach(value => {
  const card = document.createElement('li')
  const back = document.createElement('div')
  const front = document.createElement('div')
  card.classList.add('cardLi')
  card.classList.add(`${value.color}`)
  card.classList.add('move')
  front.classList.add('front')
  back.classList.add('back')
  back.style.backgroundImage = value.cardFace
  card.style.marginTop = tr + 'px'
  card.append(back)
  card.append(front)
  cardsDeckUl.append(card)
  setTimeout(() => {
  card.classList.remove('move')  
  }, delay);
  tr = tr + 1
  delay = delay + 100
})
  }
}

const clearDeck = () => {
  if (cardsDeckUl.childElementCount > 0 || doneUl.childElementCount > 0) {
  console.log('sss');
  
  const li = document.querySelectorAll('.cardLi')
  li.forEach(value => {
    console.log('s4444');
   value.classList.add('hide')
  })
  setTimeout(() => {
    li.forEach(value => {
      value.remove()
    })
  }, 500);
  tr = 0
  delay = 0
  commonDeck = []
  console.log(commonDeck, delay, tr);
  
}
}

const changeCounter = (color) => {
  if (color === 'green') {
    if (g1 > 0) {
      g1--
    } else {
      if (g2 > 0){
        g2--
      } else {
        g3--
      }
    }
  }
    if (color === 'brown') {
    if (br1 > 0) {
      br1--
    } else {
      if (br2 > 0){
        br2--
      } else {
        br3--
      }
    }
  }
      if (color === 'blue') {
    if (bl1 > 0) {
      bl1--
    } else {
      if (bl2 > 0){
        bl2--
      } else {
        bl3--
      }
    }
  }
  refreshCounter()
}

//

// listeners

chooseAncient.addEventListener('click', showPopup)
popupWrapper.addEventListener('click', function (event) {
  if (!event.target.classList.contains('ancientCard')) {
    hidePopup()
  }
})
popupWrapper.addEventListener('click', function (event) {
  if (event.target.classList.contains('ancientCard')) {
    if (leftSection.childElementCount === 0) {
    leftSection.append(event.target)
    } else {
    popup.append(leftSection.childNodes[1])
    leftSection.append(event.target)
    }
    changeChooseTitle()
    if (difficultyForm.difficultyInput.value !== 'chooseLevel' && (leftSection.childNodes[1])) {
    showShuffleButton()
    hideCounter()
    clearDeck()
    prepareDeck(leftSection.childNodes[1].id, difficultyForm.difficultyInput.value)
    }
  }
})
leftSection.addEventListener('click', function (event) {
  if (event.target.classList.contains('ancientCard')) {
  event.target.classList.replace('cardAnimation', 'big')
  }
})
document.addEventListener('click', function (event) {
  if (!event.target.classList.contains('big')) {
    if (leftSection.childNodes[1]) {
    leftSection.childNodes[1].classList.replace('big', 'cardAnimation')
    } 
  }
})
difficultyForm.addEventListener('change', function(){
  if (difficultyForm.difficultyInput.value !== 'chooseLevel' && (leftSection.childNodes[1])) {
    showShuffleButton()
    hideCounter()
    clearDeck()
    prepareDeck(leftSection.childNodes[1].id, difficultyForm.difficultyInput.value)
  }
})
shuffleButton.addEventListener('click', showCounter)
shuffleButton.addEventListener('click', hideShuffleButton)
shuffleButton.addEventListener('click', createDeck)
cardsDeckUl.addEventListener('click', function (event) {
 
  
  if (cardsDeckUl.lastChild === event.target.parentElement) {
  changeCounter(event.target.parentElement.classList[1]);
   cardsDeckUl.lastChild.classList.add('rotate')
   cardsDeckUl.lastChild.classList.add('done')
   setTimeout(() => {
    event.target.parentElement.classList.remove('done')
    if (cardsDeckUl.lastChild.classList.contains('rotate')) {
     doneUl.append(cardsDeckUl.lastChild)
    }

   }, 500);
    
  }
  
})
