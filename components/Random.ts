const RandomNum = (num: number) => {
  const NumArray = [];
  for (let i = 0; i < num; i++) {
    NumArray.push(Math.floor(Math.random() * num));
  }
  return NumArray;
};

export default RandomNum;
