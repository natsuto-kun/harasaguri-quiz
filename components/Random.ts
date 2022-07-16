const RandomNum = (num: number) => {
  const NumArray = [];
  for (let i = 0; i < num + 1; i++) {
    NumArray.push(Math.floor(Math.random() * num + 1));
  }
  return NumArray;
};

export default RandomNum;
