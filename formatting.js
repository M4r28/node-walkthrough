const removeWhitespace = input => {
  //trim space off the ends
  // input = 'thing    with   more   words'
  let result = input.trim();

  //collapse duplicate spaces
  result = result.replace(/\s+/g, " ");

  console.log(result);
};

removeWhitespace("     sao   tome");
