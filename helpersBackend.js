// module.exports = sortArray = function(ideas) {
//   ideas.sort((a, b) => {
//     const aUV = a.upVotes.length;
//     const bUV = b.upVotes.length;
//     const aTime = Math.abs(new Date() - a.created) / 60000;
//     const bTime = Math.abs(new Date() - b.created) / 60000;
//     var aScore = time2points(aTime);
//     var bScore = time2points(bTime);
//     const aPoints = aScore + aUV;
//     const bPoints = bScore + bUV;
//     return aPoints > bPoints ? -1 : 1;
//   });
// };

// function time2points(aTime) {
//   if (aTime < 1) {
//     return 10;
//   } else if (aTime < 10) {
//     return 8;
//   } else if (aTime < 60) {
//     return 6;
//   } else if (aTime < 240) {
//     return 4;
//   } else if (aTime < 800) {
//     return 2;
//   } else {
//     return 0;
//   }
// }
