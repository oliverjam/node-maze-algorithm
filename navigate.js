// function navigate(resObj, facing) {
//   let currDirection = facing || 'N';
//   const compass = Object.keys(resObj);
//   const choiceIndex = compass.indexOf(currDirection) - 1;
//   const choice =
//     choiceIndex >= 0
//       ? compass[choiceIndex]
//       : compass[compass.length + choiceIndex];
//   return choice;
// }

// function navigate(resObj, facing) {
//   let currDirection = facing || 'N';
//   const compass = Object.keys(resObj);
//   const choiceIndex = compass.indexOf(currDirection) - 1;
//   const choice =
//     choiceIndex >= 0
//       ? compass[choiceIndex]
//       : compass[compass.length + choiceIndex];
//   const canGo = dir => resObj[dir] > 0;
//   if (canGo(choice)) return choice;
//   if (canGo(currDirection)) return currDirection;
//   const newDirection = compass[compass.indexOf(currDirection) + 1];
//   if (canGo(newDirection)) return newDirection;
//   return compass[compass.indexOf(currDirection) + 2];
// }

// function navigate(resObj, facing) {
//   let currDirection = facing || 'N';
//   const canGo = dir => resObj[dir] > 0;
//
//   const compass = Object.keys(resObj);
//   const currDirectionIndex = compass.indexOf(currDirection);
//   const choiceIndex = currDirectionIndex - 1;
//   const choice =
//     choiceIndex >= 0
//       ? compass[choiceIndex]
//       : compass[compass.length + choiceIndex];
//
//   if (canGo(choice)) return choice;
//   if (canGo(currDirection)) return currDirection;
//   const nextDirection = compass[currDirectionIndex + 1];
//   if (canGo(nextDirection)) return nextDirection;
//   return compass[currDirectionIndex + 2];
// }

function navigate(resObj, currDirection = 'N') {
  const canGo = direction => resObj[direction] > 0;

  const compass = Object.keys(resObj);

  const canGoSomewhere = compass.some(dir => canGo(dir));
  if (!canGoSomewhere) return 'No way out!';

  const currDirectionIndex = compass.indexOf(currDirection);
  const choiceIndex = currDirectionIndex - 1;
  const choice =
    choiceIndex >= 0
      ? compass[choiceIndex]
      : compass[compass.length + choiceIndex];

  if (canGo(choice)) return choice;
  return navigate(resObj, compass[currDirectionIndex + 1]);
}

module.exports = navigate;
