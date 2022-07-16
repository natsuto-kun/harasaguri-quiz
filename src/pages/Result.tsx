import React, { useState, useEffect } from 'react';

const ResultPage = () => {
  const [countAnswer, setCountAnswer] = useState(0);
  const getLocalStorage = async (key: string): Promise<string> => {
    const a = await localStorage.getItem(key);
    if (a !== null) {
      return a;
    } else {
      return '';
    }
  };
  useEffect(() => {
    const getLocalStorageData = async () => {
      const getCountAnswer = await getLocalStorage('countAnswer');
      setCountAnswer(JSON.parse(getCountAnswer));
    };
    getLocalStorageData();
  }, []);
  return (
    <div>
      {countAnswer}
      <h2>リザルトになる予定</h2>
    </div>
  );
};

export default ResultPage;
