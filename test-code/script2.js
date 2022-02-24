// RANDOMIZING ANSWERS with correct answer corresponding
// let choices = ["choiceA","choiceB","choiceC","choiceD"]
// lyrics.forEach(song => {
//     let idx = song.answers;
//     choices = ["choiceA","choiceB","choiceC","choiceD"]
//     choices = choices.sort(() => 0.5 - Math.random());
//     for (let i=0; i < choices.length; i++) {
//         if (choices[i] == "choiceA") {
//           idx[i] = song.answers[i]
//           song.correctAnswer = choices[i]
//           choices.splice(i, 1)
//           song.incorrectAnswers = choices
//         }
//         if (choices[i] == "choiceB") {
//           idx[i] = song.answers[i]
//         }
//         if (choices[i] == "choiceC") {
//           idx[i] = song.answers[i]
//         }
//         if (choices[i] == "choiceD") {
//           idx[i] = song.answers[i]
//         }
//       }
//       song.answers = idx;
// } )
// console.log(choices);
// let idx = [0,1,2,3]
// for (let i=0; i < choices.length; i++) {
//   if (choices[i] == "choiceA") {
//     idx[i] = 0
//   }
//   if (choices[i] == "choiceB") {
//     idx[i] = 1
//   }
//   if (choices[i] == "choiceC") {
//     idx[i] = 2
//   }
//   if (choices[i] == "choiceD") {
//     idx[i] = 3
//   }
// }
// console.log(idx)

// FOR TIME COUNTER FOR EACH SECTION!!
// let counter = 10

// function decreaseCounter(){
//   console.log( `[decreaseCounter] ccounter=${counter}`)
//   document.querySelector('#counter').innerHTML = counter;
  
//   if( counter<1 ){
//     // counter done! showing final message!
//       document.querySelector('#counter').innerHTML = "DONE!";
//   } else {
//     counter = counter-1;
//     setTimeout( decreaseCounter, 1000 );
//   }
// }

// decreaseCounter();
