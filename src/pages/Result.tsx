/* eslint-disable new-cap */
import Script from 'next/script';
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

  

  const twitterText =  countAnswer + "やっはろー"

  return (
    <div>
      <h2>正解数: {countAnswer}</h2>
      <div>
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-text={twitterText} data-show-count="false"></a>
        <Script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></Script>
      </div>
    </div>
  );
};

export default ResultPage;
