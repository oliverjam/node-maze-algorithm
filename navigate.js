// function navigate(res, facing) {
//   let currDirection = facing || 'N';
//   const compass = Object.keys(res);
//   const choiceIndex = compass.indexOf(currDirection) - 1;
//   const choice =
//     choiceIndex >= 0
//       ? compass[choiceIndex]
//       : compass[compass.length + choiceIndex];
//   return choice;
// }

// function navigate(res, facing) {
//   let currDirection = facing || 'N';
//   const compass = Object.keys(res);
//   const choiceIndex = compass.indexOf(currDirection) - 1;
//   const choice =
//     choiceIndex >= 0
//       ? compass[choiceIndex]
//       : compass[compass.length + choiceIndex];
//   const canGo = dir => res[dir] > 0;
//   if (canGo(choice)) return choice;
//   if (canGo(currDirection)) return currDirection;
//   const newDirection = compass[compass.indexOf(currDirection) + 1];
//   if (canGo(newDirection)) return newDirection;
//   return compass[compass.indexOf(currDirection) + 2];
// }

// function navigate(res, facing) {
//   let currDirection = facing || 'N';
//   const canGo = dir => res[dir] > 0;
//
//   const compass = Object.keys(res);
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

function makeObj(res) {
  return res.split(" ").reduce((acc, item) => {
    acc[item[0]] = item[1];
    return acc;
  }, {});
}

function navigate(res, currDirection = "N") {
  if (res === "Language/team name?\n") return "Oli";

  const resObj = makeObj(res);

  if (resObj["P"]) return resObj["P"];

  const compass = Object.keys(resObj).filter(item => item !== "P?\n");

  const canGo = direction => resObj[direction] > 0;

  const canGoSomewhere = compass.some(dir => canGo(dir));
  if (!canGoSomewhere) return "No way out!";

  if (currDirection === "N") {
    if (canGo("W")) {
      return "W";
    } else {
      return navigate(res, "E");
    }
  }
  if (currDirection === "E") {
    if (canGo("N")) {
      return "N";
    } else {
      return navigate(res, "S");
    }
  }
  if (currDirection === "S") {
    if (canGo("E")) {
      return "E";
    } else {
      return navigate(res, "W");
    }
  }
  if (currDirection === "W") {
    if (canGo("S")) {
      return "S";
    } else {
      return navigate(res, "N");
    }
  }

  // const currDirectionIndex = compass.indexOf(currDirection);
  // const choiceIndex = currDirectionIndex - 1;
  // const choice =
  //   choiceIndex >= 0
  //     ? compass[choiceIndex]
  //     : compass[compass.length + choiceIndex];
  // if (canGo(choice)) {
  //   return choice;
  // }
  // currDirection =
  //   currDirectionIndex < compass.length - 1
  //     ? compass[currDirectionIndex + 1]
  //     : "N";
}

module.exports = navigate;
