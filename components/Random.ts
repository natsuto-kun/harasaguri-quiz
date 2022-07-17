const RandomNum = (num: number) => {
  const NumArray: number[] = [];
  for (let i = 0; i < num; i++) {
    while (true) {
      const random = Math.floor(Math.random() * num);
      if (!NumArray.includes(random)) {
        NumArray.push(random);
        break;
      }
    }
  }
  return NumArray;
};

export default RandomNum;

// import React, { useState } from 'react';

// const RandomNum = (num: number) => {
//   const [NumArray, setNumArray] = useState<number[]>([]);
//   for (let i = 0; i < num; i++) {
//     while (true) {
//       const random = Math.floor(Math.random() * num);
//       if (!NumArray.includes(random)) {
//         setNumArray((prev) => [...prev, random]);
//         break;
//       }
//     }
//   }
//   return NumArray;
// };

// export default RandomNum;
