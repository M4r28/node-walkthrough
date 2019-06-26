exports.prepareString = input => {
  let result = removeWhitespace(input);
  let tmpArray = result.split(" ");

  tmpArray = tmpArray.map(el => capitalizeInitial(el));

  result = tmpArray.join("_");
  // console.log(result);
};

const removeWhitespace = input => {
  //trim space off the ends
  // input = 'thing    with   more   words'
  let result = input.trim();

  //collapse duplicate spaces
  result = result.replace(/\s+/g, " ");

  // console.log(result);
  return result;
};

const capitalizeInitial = input => {
  //for tomorrow :)

  let result = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  // console.log(result);

  //Stefan solution
  // const wordArray = input.split("");
  // const formattedWordArray = wordArray.map(word => {
  //   const firstCaracter = word.charAt(0).toUpperCase();
  //   const remainder = word.slice(1).toLowerCase();
  //   return `${firstCaracter}${remainder}`;
  // });
  // const result = formattedWordArray.join(" ");
  // // console.log(result);
  return result;
};

capitalizeInitial("here's a test");


//testing
// prepareString("kuala  lumpur");
// prepareString("  puerto rico");
// prepareString(" tokyo");
