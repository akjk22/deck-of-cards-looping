const face = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'king', 'queen', 'ace'];
const suits = ['hearts', 'spades', 'diamonds', 'clubs'];

face.forEach(function(face){
  suits.forEach(function(suits){
    console.log(face + ' ' + 'of' + ' ' + suits);
  })
})


